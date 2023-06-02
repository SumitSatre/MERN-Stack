import {incBonus , incByAmt} from "../actions/index";

export function bonusReducer(bonus = { points: 0 }, action) {
    switch (action.type) {
        case incBonus:
            return { points:  bonus.points + 1 };
        case incByAmt:
            if(action.payload>=100)
              return { points:  bonus.points + 1 };
        default:
            return bonus;    
    }
}
