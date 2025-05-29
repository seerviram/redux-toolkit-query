import { configureStore } from "@reduxjs/toolkit"
import cakeReducer from "../features/cake/cakeSlice"
import icecreamReducer from "../features/icecream/icecreamSlice"
import reduxLogger from "redux-logger"
import userReducer from "../features/users/userSlice"


// const logger = reduxLogger.createLogger();
const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer
    },
    // middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger)
})
 export default store

