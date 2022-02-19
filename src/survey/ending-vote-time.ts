export const CHOSEN_SONG_DATE = new Date(2022, 10, 8, 20, 30);

export const isVotingEnded = (): boolean => {
    return new Date() > CHOSEN_SONG_DATE;
}