import {Dispatch} from "react";

// import {ObjectsNewModalsActionTypes, ObjectsNewModalsActions} from "../types/IObjectsNewModals";

export const setObjectsNewModalsOpen = () => {
    document.body.style.overflowY = "hidden";

    // return {
    //     type: ObjectsNewModalsActionTypes.SET_REGLOG_OPEN,
    //     payload: true,
    // };
};

// export const setObjectsNewModalsClose = () => {
//     return async (dispatch: Dispatch<ObjectsNewModalsActions>) => {
//         dispatch({
//             type: ObjectsNewModalsActionTypes.SET_REGLOG_CLOSE_ANIMATION,
//             payload: true,
//         });

//         setTimeout(() => {
//             document.body.style.overflowY = "visible";

//             dispatch({
//                 type: ObjectsNewModalsActionTypes.SET_REGLOG_OPEN,
//                 payload: false,
//             });

//             dispatch({
//                 type: ObjectsNewModalsActionTypes.SET_REGLOG_CLOSE_ANIMATION,
//                 payload: false,
//             });
//         }, 180);
//     };
// };

// export const setObjectsNewModalsType = (type: string, isOpen: boolean) => {
//     return async (dispatch: Dispatch<ObjectsNewModalsActions>) => {
//         if (isOpen) {
//             dispatch({
//                 type: ObjectsNewModalsActionTypes.SET_REGLOG_CLOSE_CHANGE_ANIMATION,
//                 payload: true,
//             });

//             setTimeout(() => {
//                 dispatch({
//                     type: ObjectsNewModalsActionTypes.SET_REGLOG_TYPE,
//                     payload: type,
//                 });

//                 dispatch({
//                     type: ObjectsNewModalsActionTypes.SET_REGLOG_CLOSE_CHANGE_ANIMATION,
//                     payload: false,
//                 });
//             }, 180);
//         } else {
//             dispatch({
//                 type: ObjectsNewModalsActionTypes.SET_REGLOG_TYPE,
//                 payload: type,
//             });
//         }
//     };
// };
