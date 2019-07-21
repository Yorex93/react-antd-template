import moment from "moment";

export const formatCurrency = (amount: number) => {
    return (new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN'
    })).format(amount);
}

export const formatDate = (epochMili: number, format: string = 'Do MMMM, YYYY'): string => {
  return moment(epochMili).format(format);
}
