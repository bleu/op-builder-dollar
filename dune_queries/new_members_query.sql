-- Query to fetch ProjectReachMinVouches events from BuildersManager contract
-- over the past 11 months on Optimism

WITH project_min_vouches_events AS (
    SELECT evt_block_time,_project,contract_address
    FROM
        obusd_optimism.buildersmanager_evt_projectreachedminvouches
    WHERE
        contract_address = 0xC72D602835deBf5F47A993D4aC28bFA581f278C5 -- BuildersManager contract address
        AND evt_block_time >= NOW() - interval '11' month -- Past 11 months
)

SELECT evt_block_time as block_time,_project as recipient
FROM
    project_min_vouches_events
ORDER BY block_time DESC