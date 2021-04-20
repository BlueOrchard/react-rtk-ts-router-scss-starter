type TransitionTypes = {
    type: "tween" | "spring" | "inertia",
    duration: number
}

type VariantTypes = {
    initial: {},
    in: {},
    out: {}
}

export const pageTransition: TransitionTypes = {
    type: "tween",
    duration: 0.25
}

export const pageSlide: VariantTypes = {
    initial: {
        opacity: 0,
        y: "-1rem",
    },
    in: {
        opacity: 1,
        y: 0,
    },
    out: {
        opacity: 0,
        y: "-1rem",
    },
}