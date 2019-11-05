function solve(array) {
    let BestBatchQuality = 0;
    let BestAverageBatchQuality = 0;
    let BestBatchCountQuality = 0;
    let BestAraay = [];

    for (let command of array) {

        if (command === "Bake It!") {
            console.log(`Best Batch quality: ${BestBatchQuality}`);
            console.log(BestAraay.join(" "));
            

        } else {
            let batchesBreadCount = command.split("#").map(Number);
            let currentBatchQuality = 0;
            let currentAverageQuality = 0;
            let currentBatchCountQuality = 0;
            

            for (let bread of batchesBreadCount) {
                currentBatchQuality += bread;
            }
            currentAverageQuality = currentBatchQuality / batchesBreadCount.length;
            currentBatchCountQuality = batchesBreadCount.length;


            if (currentBatchQuality > BestBatchQuality) {
                BestBatchQuality = currentBatchQuality;
                BestAverageBatchQuality = currentAverageQuality;
                BestBatchCountQuality = currentBatchCountQuality;
                BestAraay = batchesBreadCount.slice(0);
                    
            }

            if (BestBatchQuality === currentBatchQuality) {
                if (currentAverageQuality > BestAverageBatchQuality) {
                    BestAverageBatchQuality = currentAverageQuality;
                    BestBatchCountQuality = currentBatchCountQuality;
                    BestAraay = batchesBreadCount.slice(0);
                }
                if (currentAverageQuality === BestAverageBatchQuality) {
                    if (currentBatchCountQuality < BestBatchCountQuality) {
                        BestBatchCountQuality = currentBatchCountQuality;
                        BestAraay = batchesBreadCount.slice(0);

                    }
                }

            }

        }

    }


}
// solve(["5#4#10#-2", "10#5#2#3#2", "Bake It!"]);
solve(["5#3#2", "10#2#-2#1#-1", "4#2#1", "Bake It!"]);