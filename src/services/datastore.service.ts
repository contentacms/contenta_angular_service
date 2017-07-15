import { JsonApiDatastoreConfig, JsonApiDatastore } from 'angular2-jsonapi';
import { Injectable, InjectionToken } from '@angular/core';

import { Recipe } from '../models/recipe.model';
import { Category } from '../models/category.model';
import { File } from '../models/file.model';
import { Tag } from '../models/tag.model';
import { User } from '../models/user.model';
import { Image } from '../models/image.model';

const BASE_URL = new InjectionToken<string>('BaseUrl');

@Injectable()
@JsonApiDatastoreConfig({
  baseUrl: BASE_URL,
  models: {
    recipes: Recipe,
    categories: Category,
    files: File,
    images: Image,
    tags: Tag,
    users: User,
  }
})
export class ContentaDatastore extends JsonApiDatastore {}
