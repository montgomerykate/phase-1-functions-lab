function distanceFromHqInBlocks(blockNumber) {
    if (blockNumber > 42) {
    return(blockNumber - 42)
    } else {
        if (blockNumber < 42); {
            return(42 - blockNumber)
        }
    }
}
console.log(distanceFromHqInBlocks(43))
console.log(distanceFromHqInFeet(264))
console.log(distanceTravelledInFeet(264))
function distanceFromHqInFeet(blockNumber) {
    if (blockNumber > 42) {
        return((blockNumber-42)*264)
    } else (blockNumber < 42); {
        return((42-blockNumber)*264)
    }
}
function distanceTravelledInFeet(start, destination) {
    if (start > destination){
        return((start-destination)*264)
    } else (start < destination); {
        return((destination-start)*264)
    }
}
function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) <= 400) {
        return 0;
    } else if (distanceTravelledInFeet(start, destination) <= 2000) {
        return (distanceTravelledInFeet(start,destination) -400) * 0.02;
    } else if (distanceTravelledInFeet(start, destination) <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}