-- Combined query to return all metrics in a single query
WITH
-- Define token addresses and other constants
constants AS (
  SELECT
    0x21Cc97Dd0554836BB2cEFe536991D01617894E3e AS obusd_address,
    0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85 AS yield_token_address,
    0xFFA16307C4813eA0bcE1E01D5FF5ACea11FE0998 AS builders_manager_address
),
-- Get all transfers for the genesis token to build balance tracking
genesis_transfers AS (
  SELECT
    "from" AS address,
    -value AS amount  -- Negative for outgoing
  FROM erc20_optimism.evt_Transfer
  WHERE contract_address = (SELECT obusd_address FROM constants)
  UNION ALL
  SELECT
    "to" AS address,
    value AS amount   -- Positive for incoming
  FROM erc20_optimism.evt_Transfer
  WHERE contract_address = (SELECT obusd_address FROM constants)
),
-- Calculate current balances per address for the genesis token
genesis_balances AS (
  SELECT
    address,
    SUM(amount) AS balance
  FROM genesis_transfers
  GROUP BY address
),
-- Get all yield token transfers from the specified source address
yield_transfers AS (
  SELECT
    "to" AS receiver,
    value AS amount
  FROM erc20_optimism.evt_Transfer
  WHERE
    contract_address = (SELECT yield_token_address FROM constants)
    AND "from" = (SELECT builders_manager_address FROM constants)
)
-- Final combined results
SELECT
  -- Count addresses with positive balances (Query 1)
  (SELECT COUNT(*) FROM genesis_balances WHERE balance > 0) AS unique_token_holders,

  -- Total tokens transferred and unique recipients (Query 2)
  CAST(COALESCE((SELECT SUM(amount) FROM yield_transfers), 0) AS DECIMAL(38,0)) AS total_yield_generated,
  (SELECT COALESCE(COUNT(DISTINCT receiver), 0) FROM yield_transfers) AS unique_recipients,

-- Calculate transfers count
(SELECT
  COUNT(*) AS total_transfers
FROM erc20_optimism.evt_Transfer
WHERE contract_address = (SELECT obusd_address FROM constants)) AS transfers_count,

(SELECT COUNT (*)
FROM builders_manager_optimism.buildermanager_call_distributeyield
WHERE contract_address = (SELECT builders_manager_address FROM constants) AND call_success = true) as yield_distribution_count;