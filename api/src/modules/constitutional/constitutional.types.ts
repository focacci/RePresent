import { GenericPerson } from "../generic.types";

export interface ElectionCampaign {
    candidateName: string;
    candidateParty: string;
    startDate: Date;
    endDate: Date;
    victor: boolean;
}

export interface ElectionCandidate extends GenericPerson {
    campaign: ElectionCampaign
}

export interface Election {
    candidates: ElectionCandidate[];
    winner: ElectionCandidate;
}

export interface ElectedOfficial extends GenericPerson {
    party: string;
    elections?: Election[];
}
