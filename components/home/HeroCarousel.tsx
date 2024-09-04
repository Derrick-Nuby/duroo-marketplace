import hero1 from '@/public/images/hero1.jpg';
import hero2 from '@/public/images/hero2.jpg';
import hero3 from '@/public/images/hero3.jpg';
import hero4 from '@/public/images/hero4.jpg';
import hero5 from '@/public/images/hero5.jpg';
import hero6 from '@/public/images/hero6.jpg';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';


const carouselImages = [hero1, hero2, hero3, hero4, hero5, hero6];

function HeroCarousel() {
    return (
        <div className='hidden lg:block'>
            <Carousel>
                <CarouselContent>
                    {carouselImages.map((image, index) => {
                        return <CarouselItem key={index}>
                            <Card>
                                <CardContent className='p-2'>
                                    <Image src={image} alt='hero' className='w-full h-[24rem] rounded-md object-cover' />
                                </CardContent>
                            </Card>
                        </CarouselItem>;
                    })}
                </CarouselContent>
                <CarouselNext />
                <CarouselPrevious />
            </Carousel>
        </div>
    );
}

export default HeroCarousel;