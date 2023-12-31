//Particle Theme imports
import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
export default function ParticlesBackground() {
    const [init, setInit] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            //await loadFull(engine);
            await loadSlim(engine);
            //await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };
    return (
        <>

            {
                init && <Particles
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    options={{
                        "autoPlay": true,
                        // "background": {
                        //     "color": {
                        //         "value": "#000000"
                        //     },
                        //     "image": "",
                        //     "position": "",
                        //     "repeat": "",
                        //     "size": "",
                        //     "opacity": 0.5
                        // },
                        "backgroundMask": {
                            "composite": "destination-out",
                            "cover": {
                                "color": {
                                    "value": "#fff"
                                },
                                "opacity": 1
                            },
                            "enable": false
                        },
                        "clear": true,
                        "defaultThemes": {},
                        "delay": 0,
                        "fullScreen": {
                            "enable": true,
                            "zIndex": 0
                        },
                        "detectRetina": true,
                        "duration": 0,
                        "fpsLimit": 60,
                        "interactivity": {
                            "detectsOn": "window",
                            "events": {
                                "onClick": {
                                    "enable": true,
                                    "mode": "repulse"
                                },
                                "onDiv": {
                                    "selectors": [],
                                    "enable": false,
                                    "mode": [],
                                    "type": "circle"
                                },
                                "onHover": {
                                    "enable": false,
                                    "mode": "repulse",
                                    "parallax": {
                                        "enable": false,
                                        "force": 60,
                                        "smooth": 10
                                    }
                                },
                                "resize": {
                                    "delay": 0.5,
                                    "enable": true
                                }
                            },
                            "modes": {
                                "trail": {
                                    "delay": 1,
                                    "pauseOnStop": false,
                                    "quantity": 1
                                },
                                "attract": {
                                    "distance": 200,
                                    "duration": 0.4,
                                    "easing": "ease-out-quad",
                                    "factor": 1,
                                    "maxSpeed": 50,
                                    "speed": 1
                                },
                                "bounce": {
                                    "distance": 200
                                },
                                "bubble": {
                                    "distance": 400,
                                    "duration": 2,
                                    "mix": false,
                                    "opacity": 8,
                                    "size": 40,
                                    "divs": {
                                        "distance": 200,
                                        "duration": 0.4,
                                        "mix": false,
                                        "selectors": []
                                    }
                                },
                                "connect": {
                                    "distance": 80,
                                    "links": {
                                        "opacity": 0.5
                                    },
                                    "radius": 60
                                },
                                "grab": {
                                    "distance": 400,
                                    "links": {
                                        "blink": false,
                                        "consent": false,
                                        "opacity": 1
                                    }
                                },
                                "push": {
                                    "default": true,
                                    "groups": [],
                                    "quantity": 4
                                },
                                "remove": {
                                    "quantity": 2
                                },
                                "repulse": {
                                    "distance": 200,
                                    "duration": 0.3,
                                    "factor": 100,
                                    "speed": 1,
                                    "maxSpeed": 50,
                                    "easing": "ease-out-quad",
                                    "divs": {
                                        "distance": 200,
                                        "duration": 0.4,
                                        "factor": 100,
                                        "speed": 1,
                                        "maxSpeed": 50,
                                        "easing": "ease-out-quad",
                                        "selectors": []
                                    }
                                },
                                "slow": {
                                    "factor": 3,
                                    "radius": 100
                                },
                                "light": {
                                    "area": {
                                        "gradient": {
                                            "start": {
                                                "value": "#ffffff"
                                            },
                                            "stop": {
                                                "value": "#000000"
                                            }
                                        },
                                        "radius": 1000
                                    },
                                    "shadow": {
                                        "color": {
                                            "value": "#000000"
                                        },
                                        "length": 2000
                                    }
                                }
                            }
                        },
                        "manualParticles": [],
                        "particles": {
                            "bounce": {
                                "horizontal": {
                                    "value": 1
                                },
                                "vertical": {
                                    "value": 1
                                }
                            },
                            "collisions": {
                                "absorb": {
                                    "speed": 2
                                },
                                "bounce": {
                                    "horizontal": {
                                        "value": 1
                                    },
                                    "vertical": {
                                        "value": 1
                                    }
                                },
                                "enable": false,
                                "maxSpeed": 50,
                                "mode": "bounce",
                                "overlap": {
                                    "enable": true,
                                    "retries": 0
                                }
                            },
                            "color": {
                                "value": "#ffffff",
                                "animation": {
                                    "h": {
                                        "count": 0,
                                        "enable": false,
                                        "speed": 1,
                                        "decay": 0,
                                        "delay": 0,
                                        "sync": true,
                                        "offset": 0
                                    },
                                    "s": {
                                        "count": 0,
                                        "enable": false,
                                        "speed": 1,
                                        "decay": 0,
                                        "delay": 0,
                                        "sync": true,
                                        "offset": 0
                                    },
                                    "l": {
                                        "count": 0,
                                        "enable": false,
                                        "speed": 1,
                                        "decay": 0,
                                        "delay": 0,
                                        "sync": true,
                                        "offset": 0
                                    }
                                }
                            },
                            "effect": {
                                "close": true,
                                "fill": true,
                                "options": {},
                                "type": []
                            },
                            "groups": {},
                            "move": {
                                "angle": {
                                    "offset": 0,
                                    "value": 90
                                },
                                "attract": {
                                    "distance": 200,
                                    "enable": false,
                                    "rotate": {
                                        "x": 3000,
                                        "y": 3000
                                    }
                                },
                                "center": {
                                    "x": 50,
                                    "y": 50,
                                    "mode": "percent",
                                    "radius": 0
                                },
                                "decay": 0,
                                "distance": {},
                                "direction": "none",
                                "drift": 0,
                                "enable": true,
                                "gravity": {
                                    "acceleration": 9.81,
                                    "enable": false,
                                    "inverse": false,
                                    "maxSpeed": 50
                                },
                                "path": {
                                    "clamp": true,
                                    "delay": {
                                        "value": 0
                                    },
                                    "enable": false,
                                    "options": {}
                                },
                                "outModes": {
                                    "default": "out",
                                    "bottom": "out",
                                    "left": "out",
                                    "right": "out",
                                    "top": "out"
                                },
                                "random": false,
                                "size": false,
                                "speed": 0.2,
                                "spin": {
                                    "acceleration": 0,
                                    "enable": false
                                },
                                "straight": false,
                                "trail": {
                                    "enable": false,
                                    "length": 10,
                                    "fill": {}
                                },
                                "vibrate": false,
                                "warp": false
                            },
                            "number": {
                                "density": {
                                    "enable": true,
                                    "width": 1920,
                                    "height": 1080
                                },
                                "limit": {
                                    "mode": "delete",
                                    "value": 0
                                },
                                "value": 100
                            },
                            "opacity": {
                                "value": 0.5,
                                "animation": {
                                    "count": 0,
                                    "enable": false,
                                    "speed": 1,
                                    "decay": 0,
                                    "delay": 0,
                                    "sync": false,
                                    "mode": "auto",
                                    "startValue": "random",
                                    "destroy": "none"
                                }
                            },
                            "reduceDuplicates": false,
                            "shadow": {
                                "blur": 0,
                                "color": {
                                    "value": "#000"
                                },
                                "enable": false,
                                "offset": {
                                    "x": 0,
                                    "y": 0
                                }
                            },
                            "shape": {
                                "close": true,
                                "fill": true,
                                "options": {},
                                "type": "circle"
                            },
                            "size": {
                                "value": 2,
                                "animation": {
                                    "count": 0,
                                    "enable": false,
                                    "speed": 1,
                                    "decay": 0,
                                    "delay": 0,
                                    "sync": false,
                                    "mode": "auto",
                                    "startValue": "random",
                                    "destroy": "none"
                                }
                            },
                            "stroke": {
                                "width": 1,
                                // "color": "#00ff00"
                            },
                            "zIndex": {
                                "value": 0,
                                "opacityRate": 1,
                                "sizeRate": 1,
                                "velocityRate": 1
                            },
                            "destroy": {
                                "bounds": {},
                                "mode": "none",
                                "split": {
                                    "count": 1,
                                    "factor": {
                                        "value": 3
                                    },
                                    "rate": {
                                        "value": {
                                            "min": 4,
                                            "max": 9
                                        }
                                    },
                                    "sizeOffset": true,
                                    "particles": {}
                                }
                            },
                            "roll": {
                                "darken": {
                                    "enable": false,
                                    "value": 0
                                },
                                "enable": false,
                                "enlighten": {
                                    "enable": false,
                                    "value": 0
                                },
                                "mode": "vertical",
                                "speed": 25
                            },
                            "tilt": {
                                "value": 0,
                                "animation": {
                                    "enable": false,
                                    "speed": 0,
                                    "decay": 0,
                                    "sync": false
                                },
                                "direction": "clockwise",
                                "enable": false
                            },
                            "twinkle": {
                                "lines": {
                                    "enable": false,
                                    "frequency": 0.05,
                                    "opacity": 1
                                },
                                "particles": {
                                    "enable": false,
                                    "frequency": 0.05,
                                    "opacity": 1
                                }
                            },
                            "wobble": {
                                "distance": 5,
                                "enable": false,
                                "speed": {
                                    "angle": 50,
                                    "move": 10
                                }
                            },
                            "life": {
                                "count": 0,
                                "delay": {
                                    "value": 0,
                                    "sync": false
                                },
                                "duration": {
                                    "value": 0,
                                    "sync": false
                                }
                            },
                            "rotate": {
                                "value": 0,
                                "animation": {
                                    "enable": false,
                                    "speed": 0,
                                    "decay": 0,
                                    "sync": false
                                },
                                "direction": "clockwise",
                                "path": false
                            },
                            "orbit": {
                                "animation": {
                                    "count": 0,
                                    "enable": false,
                                    "speed": 1,
                                    "decay": 0,
                                    "delay": 0,
                                    "sync": false
                                },
                                "enable": false,
                                "opacity": 1,
                                "rotation": {
                                    "value": 45
                                },
                                "width": 1
                            },
                            "links": {
                                "blink": false,
                                "color": {
                                    "value": "#ffffff"
                                },
                                "consent": false,
                                "distance": 150,
                                "enable": true,
                                "frequency": 1,
                                "opacity": 0.7,
                                "shadow": {
                                    "blur": 5,
                                    "color": {
                                        "value": "#000"
                                    },
                                    "enable": false
                                },
                                "triangles": {
                                    "enable": false,
                                    "frequency": 1
                                },
                                "width": 1.5,
                                "warp": false
                            },
                            "repulse": {
                                "value": 0,
                                "enabled": false,
                                "distance": 1,
                                "duration": 1,
                                "factor": 1,
                                "speed": 1
                            }
                        },
                        "pauseOnBlur": true,
                        "pauseOnOutsideViewport": true,
                        "responsive": [],
                        "smooth": false,
                        "style": {},
                        "themes": [],
                        "zLayers": 100,
                        "name": "Slow",
                        "motion": {
                            "disable": false,
                            "reduce": {
                                "factor": 4,
                                "value": true
                            }
                        }
                    }
                    }
                />
            }


        </>
    )
}
// import { useState, useEffect } from "react";
// import Particles from "@tsparticles/react";

// export default function ParticlesBackground() {
//     const [init, setInit] = useState(false);

//     useEffect(() => {
//         // Initialize particles engine
//         setInit(true); // Set init to true once initialized
//     }, []);

//     return (
//         <>
//             {init && (
//                 <Particles
//                     id="tsparticles"
//                     options={{
//                         particles: {
//                             number: {
//                                 value: 80,
//                             },
//                             size: {
//                                 value: 3,
//                             },
//                         },
//                     }}
//                 />
//             )}
//         </>
//     );
// }
