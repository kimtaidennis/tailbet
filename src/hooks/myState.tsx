import { Betslip, Flags, Match, Menu, Sport,Fibs } from 'models/model';
import { useAppSelector } from 'redux/hooks';

export const useMyState = ( ) => {
    const flags: Flags = useAppSelector( (state) => state.games.flags);
    const jackpotMatches: Match[] = useAppSelector( (state) => state.games.jackpotMatches);
    const sportsMarkets: Sport[] = useAppSelector( (state) => state.games.markets);
    const match: Match = useAppSelector( (state) => state.games.singleMatch);
    const sportId: number = useAppSelector( (state) => state.games.sportId);
    const feeds: Match[] = useAppSelector( (state) => state.games.matches);
    const menu: Menu[] = useAppSelector( (state) => state.games.menu);
    const jackpot:Betslip[] = useAppSelector( (state) => state.games.jackpot);
    const betslip: Betslip[] = useAppSelector( (state) => state.games.betslip);
    const token:boolean = useAppSelector(state => state.auth.user);
    const odds: number = useAppSelector(state => state.games.odds);
    const type: string = useAppSelector(state => state.games.type);
    const err: string|null = useAppSelector(state => state.auth.err);
    const num: number = useAppSelector(state => state.auth.num);
    const computedFibs: Fibs[] = useAppSelector(state => state.auth.computedFibs);

    return {
        match,
        flags,
        jackpotMatches,
        sportsMarkets,
        sportId,
        feeds,
        menu,
        jackpot,
        betslip,
        token,
        odds,
        type,
        err,
        num,
        computedFibs
    }
}

