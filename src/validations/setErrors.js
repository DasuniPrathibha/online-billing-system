export const setErrors = (billType, profile, accountNumber, cardNumber, amount)=> {
    let errors = {};
    errors.billType = billType?"":"Bill Type is required"
    errors.profile = profile?"":"Profile is required"
    errors.accountNumber = accountNumber?"":"Account number is required"
    errors.cardNumber = cardNumber?"":"Card number is required"
    errors.amount = amount?"":"Amount is required"

    return errors;
};