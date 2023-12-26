import React, {useCallback} from 'react'
import {graphql, useStaticQuery} from "gatsby"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import {DotButton, useDotButton} from './EmblaCarouselDotButton'
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import JSONData from "../../../content/slider-quotes.json"

const EmblaCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        duration: 50
    }, [Autoplay(
        {
            delay: 3000,
            stopOnMouseEnter: true,
            stopOnInteraction: false
        }
    )])

    const data = useStaticQuery(graphql`
        query MyQuery {
            allFile(
                filter: {sourceInstanceName: {eq: "images"}, relativeDirectory: {eq: "slider"}}
                sort: {base: ASC}
            ) {
                nodes {
                    base
                    name
                    childImageSharp {
                        gatsbyImageData(width: 1280)
                    }
                }
            }
        }
    `)

    const onButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
        const {autoplay} = emblaApi.plugins()
        if (!autoplay) return
        if (autoplay.options.stopOnInteraction !== false) autoplay.stop()
    }, [])

    const {selectedIndex, scrollSnaps, onDotButtonClick} = useDotButton(
        emblaApi,
        onButtonClick
    )

    return (
        <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
                {
                    data.allFile.nodes.map((node) => {
                        const img = getImage(node.childImageSharp?.gatsbyImageData)
                        for (let slide of JSONData) {
                            if (node.name === slide.name) {
                                return <div key={node.base}
                                            className="flex-00100 min-w-0">
                                    <GatsbyImage
                                        image={img}
                                        loading="eager"
                                        quality={95}
                                        formats={["auto", "webp", "avif"]}
                                        alt="" />
                                    <div className={"absolute top-12 pl-12 w-6/12 text-white opacity-80"}>
                                        <p className={"font-serif text-left text-5xl italic"}>{slide.data.quote}</p>
                                        <p className={"font-serif text-right pt-2"}>{slide.data.signature}</p>
                                    </div>
                                </div>
                            }
                        }
                    })
                }
            </div>


            <div
                className="flex absolute -mt-7 inset-x-0 w-full justify-center items-center">
                {scrollSnaps.map((_, index) => (
                    <DotButton
                        key={index}
                        onClick={() => onDotButtonClick(index)}
                        className={"flex w-6 h-6 mx-1 items-center after:w-full after:h-0.5 after:rounded".concat(
                            index === selectedIndex ? ' after:bg-white/85' : ' after:bg-white/40'
                        )}
                    />
                ))}
            </div>
        </div>
    )
}

export default EmblaCarousel