export interface filmData {
    FilmId: number,
    Title: string,
    Cert: string,
    Img: string,
    Trailer: string,
    ReleaseDate: string,
    RunTime: string,
    Synopsis: string,
    Teaser: string,
    Cast: string,
    Director: string,
    Writer: string,
    FriendlyName: string,
    Experiences: Experience[],
    ComingSoonFlag: boolean,
    Sessions: Sessions[],
    DisplayTitle: string,
    FilmGroup?: string,
    FirstSessionTime: string,
    MediaItems: MediaItems,
    Order: number,
    IsCurrentlyBookable: boolean,
    NewReleaseFlag: boolean
}

export interface Experience {
    Id: string,
    AttributeTypeName?: string,
    Name: string,
    ExternalId: string,
    Description?: string,
    AttributeType: number
}

export interface Sessions {
    Date: string,
    NewDate: string,
    DisplayDate: string,
    ActualDate: string,
    ActualDisplayDate: string,
    Times?: Times[]
}

export interface MediaItems {
    Trailer?: string,
    Still?: string,
    Poster?: string,
    FilmInfoHeroPanel?: string
}

export interface Times {
    StartTime: string,
    StartDateTime: string,
    Scheduleid: string,
    ExternalScheduleId: string,
    SoldOut: boolean,
    NotBookable: boolean,
    SessionExpired: boolean,
    CinemaId: number,
    ExternalCinemaId: string,
    CinemaName: string,
    Screen: string,
    Experience: Experience[],
    LocalLongDate?: string | null,
    PassesAllowed: boolean,
    UngroupedFilmExternalId: string
}