import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { User } from '../Models/User';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  UserCollection: AngularFirestoreCollection<User>;
  UserDoc: AngularFirestoreDocument<User>;
  users: Observable<User[]>;
  user: Observable<User>;

  constructor(
    private _afs: AngularFirestore
  ) {
      this.UserCollection = this._afs.collection('users'); 
    }

  addNewUser(user: User) {
    this.UserCollection.add(user);
  }

  // getUserList() {
  //   this.UserCollection = this._afs.collection('users');
  // }


  userList() {
    this.UserCollection = this._afs.collection<User>('users');

    this.users = this.UserCollection.snapshotChanges().pipe(
      map(action => action.map(a => {
        const data = a.payload.doc.data() as User;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    );

    return this.users;
  }

  userDetails(userId) {
    this.UserDoc = this._afs.collection<User>('users').doc(userId);
    return this.user = this.UserDoc.valueChanges();
  }
}
