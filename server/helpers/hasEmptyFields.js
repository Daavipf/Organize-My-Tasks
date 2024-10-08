module.exports = function hasEmptyFields(object){
    for(const field in object){
        if(object[field] == "" || !object[field]){
            return true
        }
    }
    return false
}