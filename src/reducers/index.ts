import {combineReducers} from 'redux'
import characterReducer from '../components/tiles/slices/characterSlice'
import mapImagesReducer from '../components/tiles/slices/mapImageSlice'
import statusReducer from '../components/tiles/slices/statusSlice'

export default combineReducers({
    mapImagesLoaded: mapImagesReducer,
    gameStatus: statusReducer,
    character: characterReducer,
})