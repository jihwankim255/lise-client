import {PrismaClient} from '@prisma/client'

declare global {
  var prisma: PrismaClient | undefined
}

export const db = globalThis.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalThis.prisma = db
// 개발 단계에서 핫리로드 때문에 매번 저장할 때마다 새 PrismaClient 인스턴스가 생성됨
// globalThis는 핫리로드에 영향을 받지 않는다
