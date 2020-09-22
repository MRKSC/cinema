// Version 1.0

const SortLeavingViewers = (viewerSeatInTheater,viewerWhichWantsToLeaveFirst) => {
    const viewersWalkedFromCinemaInThisOrder = [];
    for(let i = 0; i <= viewerWhichWantsToLeaveFirst.length; i++ ) {
        viewerWhichWantsToLeaveFirst.map((leaver) => viewerSeatInTheater.map((seat, numberOfSeatOfViewerInTheater) => {
            if (leaver === seat && numberOfSeatOfViewerInTheater === 0 )  {
                viewersWalkedFromCinemaInThisOrder.push(seat)
                viewerSeatInTheater.shift()
            }
            else if (leaver === seat && numberOfSeatOfViewerInTheater === viewerSeatInTheater.length-1 )  {
                viewersWalkedFromCinemaInThisOrder.push(seat)
                viewerSeatInTheater.pop()
            }

        } ))
    }
    console.log(`People leave Cinema in this order ${viewersWalkedFromCinemaInThisOrder}`)
}

SortLeavingViewers([1,2,3,4,5,6,7,8,9,10],[3,1,2,4,5,7,6,8,9,10]);