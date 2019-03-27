import UserViewModel from '../view-models/user-view-model';
import { Page } from 'ui/Page';
import { EventData } from 'data/observable';

var frameModule = require("ui/frame");
var model = new UserViewModel();

function pageLoaded(args: EventData) {
  var page = <Page>args.object;
  page.bindingContext = model;
}

exports.pageLoaded = pageLoaded;
