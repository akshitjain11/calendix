export type WeekdayName = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
export type BookingTimes = Record<WeekdayName,FromTo>
export type FromTo = {
    from:string,
    to:string,

}