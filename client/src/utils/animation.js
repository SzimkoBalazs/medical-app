export const containerVariants = (delay = 0) => ({
    "offscreen": {
        opacity: 0,
        y: 30
    },
    "onscreen": {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            duration: 2,
            delay
        }
    }
})

export const tagVariants = {
    "offscreen": {
        opacity: 0,
        y: 10
    },
    "onscreen": {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            duration: 2,
        }
    }
}

export const titleVariants = {
    "offscreen": {
        opacity: 0,
        y: 30
    },
    "onscreen": {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            duration: 2.2,
        }
    }
}

export const descriptionVariants = {
    "offscreen": {
        opacity: 0,
        y: 20
    },
    "onscreen": {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            duration: 2.6,
            delay: .2
        }
    }
}




// for booking page

export const containerVariant = (delay = 0) => ({
    initial: {
        opacity: 0,
        y: 30
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            duration: 2,
            delay
        }
    }
});

export const tagVariant = {
    initial: {
        opacity: 0,
        y: 10
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            duration: 2,
        }
    }
};

export const titleVariant = {
    initial: {
        opacity: 0,
        y: 30
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            duration: 2.2,
        }
    }
};

export const descriptionVariant = {
    initial: {
        opacity: 0,
        y: 20
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            duration: 2.6,
            delay: .2
        }
    }
};
