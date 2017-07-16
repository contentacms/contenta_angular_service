# Contenta CMS Angular Service
Shared services for the example Angular consumers.

# Installation

To install this library, run:

`npm install contenta-angular-service --save`

# JSON API service

For consumers using JSON API, a service and models are provided to simplify how
requests are made to Contenta.

## Usage

First, add the `ContentaServiceModule` to your app module imports:

```
import { ContentaServiceModule } from 'contenta-angular-service';

@NgModule({
  imports: [
    BrowserModule,
    ContentaServiceModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Then in your component, include `ContentaDatastore` as a provider and define
the base URL to your JSON API endpoint.

```
import { ContentaDatastore } from 'contenta-angular-service';
import { BASE_URL } from 'contenta-angular-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    ContentaDatastore,
    { provide: BASE_URL, useValue: 'http://localhost/api/' }
  ]
})
export class HomePage {

  constructor(private datastore: ContentaDatastore) {}

}
```

Once you have the `ContentaDatastore` instance, you can query Contenta data by
referencing the models you need. Here's an example of a simple query:

```
import { Recipe } from 'contenta-angular-service';

let query = this.datastore.query(Recipe, {
  include: 'image,category,tags'
});
query.subscribe(
  (recipes: Recipe[]) => {
    // I can access recipe.image now!
  }
}
```

`ContentaDatastore` extends [angular2-jsonapi](https://github.com/ghidoz/angular2-jsonapi),
which provides all of the logic regarding requests. Please consult the
documentation there for anything lacking here.

# Development

To build this project, run:

`npm run build`.
