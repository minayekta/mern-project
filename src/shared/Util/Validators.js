const typeRequier = "REQUIER"

const validatorRequier = () => ({
    value: typeRequier
})


export const validate = (value, validators)=>{
    const isValid = true
    for( let validator of validators) {
        if(validator.type == typeRequier){
            isValid = isValid && value.trim().length > 0
        }
    }
    return isValid
}