import moment from 'moment';

import base from './base';


export default class extends base {

  async indexAction(){
    let postList = await this.model('post').order('date DESC').select();

    await this.implementPosts(postList);

    this.assign('list', this.gatherPost(postList));

    return this.display();
  }

}