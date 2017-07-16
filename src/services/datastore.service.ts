import { JsonApiDatastoreConfig, JsonApiDatastore } from 'angular2-jsonapi';
import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';

import { Recipe } from '../models/recipe.model';
import { Category } from '../models/category.model';
import { File } from '../models/file.model';
import { Tag } from '../models/tag.model';
import { User } from '../models/user.model';
import { Image } from '../models/image.model';

import { BASE_URL } from '../config';

@Injectable()
@JsonApiDatastoreConfig({
  models: {
    recipes: Recipe,
    categories: Category,
    files: File,
    images: Image,
    tags: Tag,
    users: User,
  }
})
export class ContentaDatastore extends JsonApiDatastore {

  constructor(http: Http, @Inject(BASE_URL) baseUrl: string) {
    super(http);
    // JsonApiDatastore uses Reflect to determine the baseUrl in a private
    // method, so to have that be dynamic we have to define it here.
    let metadata = Reflect.getMetadata('JsonApiDatastoreConfig', this.constructor);
    metadata.baseUrl = baseUrl;
    Reflect.defineMetadata('JsonApiDatastoreConfig', metadata, this.constructor);
  }

}
