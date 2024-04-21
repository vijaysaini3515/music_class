"use client"
import Link from 'next/link';
import featuredData from '../data/music_course.json';
import { BackgroundGradient } from './ui/background-gradient';

interface Courses{
  id: number,
  title:string,
  slug: string,
  description: string,
  price: number,
  instructor: string,
  isFeatured: boolean
}

const FeaturedCourses = () => {

 const featuredCourses = featuredData.courses.filter((course:Courses) =>course.isFeatured);

  return (
    <div className="py-12 bg-gray-900">
      <div className='text-center'>
        <h2 className='text-base text-teal-500 font-semibold tracking-wide'>FEATURED COURSES</h2>
        <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Lear with the best</p>
      </div>
      <div className='mt-10'>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center p-10">
          {
            featuredCourses.map((item:Courses)=>(
              <div key={item.id} className='flex justify-center'>
                <BackgroundGradient className='flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm'>
                  <div className='p-4 sm:p-6 flex flex-col items-center text-center flex-grow'>
                    <p className='text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200'>{item.title}</p>
                    <p className='text-sm text-neutral-600 dark:text-neutral-400 flex-grow'>{item.description}</p>
                    <Link className='px-4 py-2 rounded border border-neutral-600 hover:bg-gray-200 hover:text-black transition duration-200' href={`/courses/${item.slug}`}>Learn more</Link>

                  </div>
                </BackgroundGradient>
              </div>
            ))
          }
        </div>
      </div>
      <div className='mt-20 text-center'>
        <Link href={'/courses'} className='px-4 py-2 rounded border border-neutral-600 hover:bg-gray-400 transition duration-200 hover:text-black'>
        View all courses
        </Link>
      </div>
    </div>
  )
}

export default FeaturedCourses;
