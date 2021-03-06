import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common'

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return '영화 전체 리턴'
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `해당 년도 이후의 영화 검색: ${searchingYear}년`
  }

  @Get(':id')
  getOne(@Param('id') movieId: string) {
    return `영화 하나 조회, 아이디: ${movieId}`
  }

  @Post()
  create(@Body() movieData) {
    console.log(movieData)
    return movieData
  }

  @Delete(':id')
  remove(@Param('id') movieId: string) {
    return `영화 하나 삭제, 아이디: ${movieId}`
  }

  @Patch(':id')
  patch(@Param('id') movieId: string, @Body() updateData) {
    return {
      updatedMovie: movieId,
      ...updateData,
    }
  }
}
