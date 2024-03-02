import {db} from '@/lib/db'
// import { getSession } from 'next-auth/client';
import {NextResponse} from 'next/server'
import {NextApiRequest, NextApiResponse} from 'next'
/**새로운 코스를 생성함*/
export async function POST(req: NextApiRequest) {
  try {
    //ToDo clerk가 없기 때문에 auth() 사용 불가
    // const session = await getSession({req})
    // const userId = session?.user?.email
    const userId = 'abc'
    console.log('userId: ', userId)
    const {title} = await req.body
    console.log('title: ', title)

    if (!userId) {
      return new NextResponse('Unauthorized', {status: 401})
    }

    const course = await db.course.create({
      data: {
        userId,
        title,
      },
    })
    return NextResponse.json(course)
  } catch (error) {
    console.log('[Courses]', error)
    return new NextResponse('Internal Error', {status: 500})
  }
}
