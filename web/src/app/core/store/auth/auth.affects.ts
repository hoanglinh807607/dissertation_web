// Note: Import PostEffects vào trong core.module
import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {AuthService} from "../../service/auth.service";
import * as authActions from './auth.actions';
import {catchError, map, mergeMap} from "rxjs/operators";

@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
  ) { }

  // loadAuth$ = createEffect(() => this.actions$.pipe(
  //   ofType(authActions.login),   // Khi mà action này xảy ra
  //   mergeMap(() => this.authService.login()),  // Thì chúng ta sẽ làm hành động này. this.postService.getPosts() sẽ trả về 1 observables, this.postService.getPosts() trả về 1 giá trị thì thằng map sẽ được chạy
  //   map(posts => authActions.getPostsSuccess({ posts })), // Sau khi làm hành động trên xong thì nó sẽ trả về cho chúng ta 2 cái action tương ứng
  //   catchError(error => of(authActions.getPostsFailed({ error })))
  // ));

}
