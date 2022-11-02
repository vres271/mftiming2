import { Category } from './entities/category.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Repository } from 'typeorm';


@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {

    const category = new Category()
    if(createCategoryDto.name!==undefined) category.name = createCategoryDto.name
    if(createCategoryDto.ageFrom!==undefined) category.ageFrom = createCategoryDto.ageFrom
    if(createCategoryDto.ageTo!==undefined) category.ageTo = createCategoryDto.ageTo
    return this.categoriesRepository.save(category)
      .then(category=>{
        return category;
      })
  }

  findAll() {
    return this.categoriesRepository.find()
      .then(items=>items.map(category=>{
        return category;
      }))
  }

  findOne(findOptions:{id: number}) {
    return this.categoriesRepository.findOne({where:findOptions})
      .then(category=>{
        return category;
      })
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return this.categoriesRepository.update(id, updateCategoryDto)
  }

  remove(id: number) {
    return this.categoriesRepository.delete(id)
  }

}
