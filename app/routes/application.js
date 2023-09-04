import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service store;
  model() {
    return this.store.findRecord('face', 'id-1');
  }
}
