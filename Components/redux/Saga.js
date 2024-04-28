import { takeEvery } from "redux-saga/effects";
import { USER_LIST } from "./Constant";
function* userlist(){
   console.log("Saga called")
}
function* SagaData(){
    yield takeEvery(USER_LIST , userlist)
}
export default SagaData;