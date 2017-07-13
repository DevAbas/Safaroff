Sketchdə olan design-i analiz etdikdən sonra, proyektin hazırlanması üçün bu texnalogiyaları uyğun gördüm.

Proyektdə istifadə edilən texnalogiyalar:
Task Runner        => GulpJS;
StyleSheet         => Bootsrtap4-sass(main-scss,compass);
Library            => jQuery;
Package Managment  => npm, bower;
Scroll animation   => ScrollMagic - javascript library

GulpJS üçün istifadə etdiyim package -lər:
1)gulp-concat         => javascript code larını 1 faylda birləşdirmək üçün.
2)gulp-uglify         => javascript code larını minify etmək üçün.
3)gulp-compass        => Sass,scss code larını compile etmək üçün.
4)gulp-minify-html    => HTML codeları minify etmək üçün.
5)gulp-w3cjs          => Yazdığım code ların “W3" standartlarına uyğun olub-olmadığını 				 görmək üçün.

Proyekt development və production hissələrdən ibarətdir:
Development hissədə "minify" edilməmiş code -lar, production hissədə isə "minify" edilmiş code -lar yer alır.
Proyekti "development environment" dən açmaq üçün sadəcə terminlada "NODE_ENV=development gulp" yazmaq kifayətdir,
"production environment" -i açmaq üçün isə terminalda "NODE_ENV=production gulp" yazmaq lazımdır.


GitHub Repository link => https://github.com/DevAbas/Safaroff
Fb Account Link        => https://www.facebook.com/abbas.moff
Email address          => abas.memmedov.94@gmail.com
