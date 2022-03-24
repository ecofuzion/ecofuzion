
export class Features {

    static get isProjectsEnabled() : boolean {
       return process.env.PROJECTS_ENABLED === 'true'
    }

    static get isDonateEnabled() : boolean {
        return process.env.DONATE_ENABLED === 'true'
    }

    static get isShuttered() : boolean {
        return process.env.SHUTTER_ENABLED === 'true'
    }
}