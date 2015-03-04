// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
  console.log("COLLECTION: %s / ITEMS PER PAGE: %s", collection, itemsPerPage);
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
  return this.collection.length;
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
  var pages = this.collection.length / this.itemsPerPage;
  if (pages % 1 !== 0) {
    pages = Math.floor(pages) + 1;
  }
  return pages;
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  console.log("PAGE INDEX: ", pageIndex);
  var pagesWithFullCount = Math.floor(this.collection.length / this.itemsPerPage) - 1;
  if (pagesWithFullCount + 1 < pageIndex) {
    return -1;
  }
  if (pageIndex <= pagesWithFullCount) {
    console.log('HERE');
    return this.itemsPerPage;
  }
  var remainder = this.collection.length % this.itemsPerPage;
  console.log(remainder);
  return remainder;
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
  console.log("ITEM INDEX: ", itemIndex);
  if (this.collection.length - 1 < itemIndex || itemIndex < 0) {
    return -1;
  }
  var x = -1;
  var pageNumber = 0;
  while (x < this.collection.length) {
    x += this.itemsPerPage;
    if (itemIndex <= x) {
      return pageNumber;
    }
    pageNumber++;
  }
}
