var getIntersectionNode = function(headA, headB){
    //if one of list is empty return null
    if(headA === null || headB === null){
        return null;
    }

    let pointerA = headA;
    let pointerB = headB;

    while(pointerA !== pointerB){
        pointerA = pointerA===null?headB:pointerA.next;//if pointer reaches to null reset it to other list
        pointerB = pointerB===null?headA:pointerB.next;//this will cover legth gap bet them & find itersection
    }
    return pointerA;
}

/* Two cases of having no intersection:
1: One of them is empty
2. both are of same length */