# Angular Basics

![](https://angular.io/generated/images/guide/architecture/overview2.png)

## Template, Directives and Data Binding
`Template` is a combination of HTML and Angular markup.    

`Directives` provide program logic to bind markup.  
1.  `Component Directives` ()
2.  `Structural Directives` (starts with * {eg *ngIf, *ngFor})
3.  `Attribute Directives` (ngClass, ngStyle) 
    1.  `ngClass` is used to add or remove CSS classes.
    2.  `ngStyle` is used to dynamically change the style. 

`Data Binding`  

1.  `String interpolation` on way binding `<li>Name: {{ user.name }}</li>`
2.  `Property Binding` -> pass data to template `<input type="email" [value]="user.email">`
3.  `Event Binding` -> bind events and respond on user input `<button (click)="cookBacon()"></button>` 
4.  `Tow-way Data Binding` -> `[(ngModel)] = "[property of your component]"  `

## Services and Dependency Injection
`Dependency Injection (DI)` 
## Routing (app-router.module.ts)

## Angular Component
A Component control a patch of screen called view.
```javascript
abc.component.html // Holds the view 
abc.component.ts // Components application logic

// The class interacts with the view through an API of properties and methods
// Angular creates, updates, and destroys components as the user moves through 
// the application. Your app can take action at each moment in this lifecycle 
// through optional lifecycle hooks, like ngOnInit().

// @Component decorator is used to declare the class as an Angular component.  
// @Component contains `METADATA`

@Component({ //this is MetaData
  selector: 'app-hero-list',
  templateUrl : './hero-list.component.html',
  providers: [HeroService],
  .
  . 
})
```
`Decorators` are functions that modify JavaScript classes.  
`Decorators` are used for attaching metadata to classes.
