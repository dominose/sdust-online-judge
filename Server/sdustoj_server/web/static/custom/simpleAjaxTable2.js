var SATable = {}

SATable.getFormData = function(form) {
  var array = $(form).serializeArray()
  var data = {}
  for(var i in array) {
    var it = array[i]
    data[it.name] = it.value
  }
  return data
}

SATable.getDom = {}
SATable.getDom.Br = function(class_) {
  var br = $('<br/>')
  if (class_) {
    $(br).addClass(class_)
  }
  return br
}
SATable.getDom.Div = function(class_) {
  var div = $('<div></div>')
  if (class_) {
    $(div).addClass(class_)
  }
  return div
}
SATable.getDom.Container = function(class_) {
  classes = 'container'
  if (class_) {
    classes += ' ' + class_
  }
  return SATable.getDom.Div(classes)
}
SATable.getDom.RowBetween = function(class_) {
  classes = 'row justify-content-between'
  if (class_) {
    classes += ' ' + class_
  }
  return SATable.getDom.Div(classes)
}
SATable.getDom.BtnGroup = function(class_) {
  var div = SATable.getDom.Div('btn-group')
  $(div).attr('role', 'group')
  if (class_) {
    $(div).addClass(class_)
  }
  return div
}
SATable.getDom.H2 = function(text, class_) {
  var h2 = $('<h2></h2>')
  if (text) {
    $(h2).text(text)
  }
  if (class_) {
    $(h2).addClass(class_)
  }
  return h2
}
SATable.getDom.H3 = function(text, class_) {
  var h3 = $('<h3></h3>')
  if (text) {
    $(h3).text(text)
  }
  if (class_) {
    $(h3).addClass(class_)
  }
  return h3
}
SATable.getDom.ButtonOutline = function(name, class_) {
  var btn = $('<button type="button" class="btn btn-outline-primary"></button>')
  if (name) {
    $(btn).text(name)
  }
  if (class_) {
    $(btn).addClass(class_)
  }
  return btn
}
SATable.getDom.Button = function(name, class_) {
  var btn = $('<button type="button" class="btn btn-primary"></button>')
  if (name) {
    $(btn).text(name)
  }
  if (class_) {
    $(btn).addClass(class_)
  }
  return btn
}
SATable.getDom.ButtonSubmit = function(name) {
  var span = $('<span class="input-group-btn"></span>')
  var btn = SATable.getDom.Button(name)
  $(span).append(btn)
  return span
}
SATable.getDom.AButton = function(name, href, class_) {
  var a = $('<a class="btn btn-primary" href="javascript:void(0)"></a>')
  if (name) {
    $(a).text(name)
  }
  if (href) {
    $(a).attr('href', href)
  }
  if (class_) {
    $(a).addClass(class_)
  }
  return a
}
SATable.getDom.Form = function(class_) {
  var form = $('<form class="form" onsubmit="return false;"></form>')
  if (class_) {
    form.addClass(class_)
  }
  return form
}
SATable.getDom.Span = function(class_) {
  var span = $('<span></span>')
  if (class_) {
    $(span).addClass(class_)
  }
  return span
}
SATable.getDom.Input = function(name, placeholder, class_) {
  var input = $('<input type="text" class="form-control" name="'+name+'" placeholder="'+placeholder+'"/>')
  if (class_) {
    $(input).addClass(class_)
  }
  return input
}
SATable.getDom.InputText = function(name, caption, placeholder, class_) {
  var div = SATable.getDom.Div('form-group row')
  var label = $('<label class="col-md-3 col-form-label">' + caption + '</label>')
  var divInput = SATable.getDom.Div('col-md-9')
  var input = $('<input class="form-control" type="text" name="' + name + '"/>')
  if (placeholder) {
    $(input).attr('placeholder', placeholder)
  }
  $(divInput).append(input)
  $(div).append(label).append(divInput)
  if (class_) {
    $(div).addClass(class_)
  }

  return div
}
SATable.getDom.InputSelect = function(name, caption, options, class_) {
  var div = SATable.getDom.Div('form-group row')
  var label = $('<label class="col-md-3 col-form-label">' + caption + '</label>')
  var divInput = SATable.getDom.Div('col-md-9')
  var select = $('<select class="form-control">')
  if (name) {
    $(select).attr('name', name)
  }

  for (var i in options) {
    var it = options[i]
    var option = $('<option></option>')
    if (it.value) {
      $(option).val(it.value)
    }
    if (it.text) {
      $(option).text(it.text)
    }
    if (it.selected) {
      $(option).attr('selected', 'selected')
    }
    $(select).append(option)
  }

  $(divInput).append(select)
  $(div).append(label).append(divInput)
  if (class_) {
    $(div).addClass(class_)
  }

  return div
}
SATable.getDom.Nav = function(class_) {
  var nav = $('<nav></nav>')
  if (class_) {
    $(nav).addClass(class_)
  }
  return nav
}
SATable.getDom.Ul = function(class_) {
  var ul = $('<ul></ul>')
  if (class_) {
    $(ul).addClass(class_)
  }
  return ul
}
SATable.getDom.Table = function(class_) {
  var table = $('<table class="table table-hover"></table>')
  if (class_) {
    $(table).addClass(class_)
  }
  return table
}
SATable.getDom.THead = function(class_) {
  var tHead = $('<thead></thead>')
  if (class_) {
    $(tHead).addClass(class_)
  }
  return tHead
}
SATable.getDom.TBody = function(class_) {
  var tBody = $('<tbody></tbody>')
  if (class_) {
    $(tBody).addClass(class_)
  }
  return tBody
}
SATable.getDom.Tr = function(class_) {
  var tr = $('<tr></tr>')
  if (class_) {
    $(tr).addClass(class_)
  }
  return tr
}
SATable.getDom.Td = function(class_) {
  var td = $('<td></td>')
  if (class_) {
    $(td).addClass(class_)
  }
  return td
}
SATable.getDom.IconLoading = function(class_) {
  var icon = $('<i class="fa fa-circle-o-notch fa-spin fa-2x fa-fw"></i>')
  if (class_) {
    $(icon).addClass(class_)
  }
  return icon
}

SATable.InputType = {
  'text': SATable.getDom.InputText
}

SATable.hasFilter = function() {
  return this.filters.length > 0
}

SATable.hasSearch = function() {
  return this.search
}

SATable.createFilterForm = function() {
  var self = this
  var getDom = SATable.getDom

  var divContainer = getDom.Container('jumbotron bg-faded collapse')
  var formFilter = getDom.Form()

  for (var i in self.filters) {
    var filter = self.filters[i]
    var input = SATable.InputType[filter.type](filter.name, filter.caption, filter.placeholder)
    $(formFilter).append(input)
  }

  var btnSubmit = getDom.ButtonSubmit('筛 选')

  $(formFilter).append(getDom.Br()).append(btnSubmit)
  $(divContainer).attr('id', self.tableIDs.filterDiv).append(formFilter)

  self.dom.filter.form = formFilter
  self.dom.filter.div = divContainer
  self.dom.filter.submit = btnSubmit

  return divContainer
}

SATable.createHead = function() {
  var self = this
  var getDom = SATable.getDom

  var divBetween = getDom.RowBetween()

  var divTitle = getDom.Div()
  var h2Title = getDom.H2(self.title)
  var divBtn = getDom.BtnGroup()
  $(divTitle).addClass('col-6').append(h2Title)
  if (self.hasFilter()) {
    var btnFilter = getDom.ButtonOutline('筛选')
    $(btnFilter).attr('data-toggle', 'collapse').attr('data-target', '#' + self.tableIDs.filterDiv)
    $(divBtn).append(btnFilter)

    self.dom.filter.button = btnFilter
  }
  if (self.createURL != null) {
    var btnCreate = getDom.AButton('创建', 'javascript:void(0);')
    $(divBtn).append(btnCreate)
  }
  $(divBetween).append(divTitle).append(divBtn)

  return divBetween
}

SATable.createBarUp = function() {
  var self = this
  var getDom = SATable.getDom

  var divBetween = getDom.RowBetween()
  var divSearch = getDom.Div('col-md-5 col-sm-12')
  var divPage = getDom.Div('col-md-6 col-sm-12')
  $(divBetween).append(divSearch).append(divPage)

  var nav = getDom.Nav()
  var ul = getDom.Ul('pagination ' + self.tableIDs.pageClass)
  $(nav).attr('style', 'float:right;').append(ul)
  $(divPage).append(nav)

  self.dom.pagination.up = {}
  self.dom.pagination.up.div = divPage
  self.dom.pagination.up.nav = nav
  self.dom.pagination.up.ul = ul

  if (self.search) {
    var form = getDom.Form()
    var divInput = getDom.Div('form-group row')
    var divInput2 = getDom.Div('col-xs-12 input-group')
    var input = getDom.Input('search', '搜索')
    var span = getDom.Span('input-group-btn')
    var button = getDom.Button('')
    var i = $('<i class="fa fa-search"></i>')

    $(button).append(i)
    $(span).append(button)
    $(divInput2).append(input).append(span)
    $(divInput).append(divInput2)
    $(form).append(divInput)
    $(divSearch).append(form)

    self.dom.search.form = form
    self.dom.search.input = input
    self.dom.search.submit = button
  }

  return divBetween
}

SATable.createBarBottom = function() {
  var self = this
  var getDom = SATable.getDom

  var divBetween = getDom.RowBetween()
  var divPageNumber = getDom.Div('col-md-5')
  var divPage = $(self.dom.pagination.up.div).clone(true)
  $(divBetween).append(divPageNumber).append(divPage)

  self.dom.pagination.bottom = {}
  self.dom.pagination.bottom.div = divPage

  var formPageNumber = getDom.Form()
  var divSelect = getDom.InputSelect('pageNumber', '每页', [
    { text: '5', value: '5' },
    { text: '10', value: '10' },
    { text: '20', value: '20', selected: true },
    { text: '50', value: '50' },
    { text: '100', value: '100' },
    { text: '200', value: '200' }
  ])
  $(formPageNumber).append(divSelect)
  $(divPageNumber).append(formPageNumber)

  self.dom.pageNumber.div = divPageNumber
  self.dom.pageNumber.form = formPageNumber

  return divBetween
}

SATable.createTable = function() {
  var self = this
  var getDom = SATable.getDom

  var div = getDom.Div()
  var table = getDom.Table()
  var tHead = getDom.THead()
  var tBody = getDom.TBody()
  var tr = getDom.Tr()

  $(tHead).append(tr)
  $(table).append(tHead).append(tBody)
  $(div).append(table)

  self.dom.table.head = tHead
  self.dom.table.headTr = tr
  self.dom.table.body = tBody

  return div
}

SATable.initTable = function() {
  var self = this
  var getDom = SATable.getDom

  var divContainer = getDom.Container()

  // head
  $(divContainer).append(self.createHead())
  if (self.hasFilter()) {
    $(divContainer).append(getDom.Br()).append(self.createFilterForm())
  }
  // bar up
  $(divContainer).append(self.createBarUp())
  // table
  $(divContainer).append(self.createTable())
  // bar bottom
  %(divContainer).append(self.createBarBottom())

  $('#' + self.id).append(divContainer)
}

SATable.initData = function(tableInfo) {
  var self = this

  self.id = tableInfo.id
  self.title = tableInfo.title
  self.columns = tableInfo.columns ? tableInfo.columns : []
  self.filters = tableInfo.filters ? tableInfo.filters : []
  self.search = tableInfo.search ? tableInfo.search : false
  self.requestGenerator = tableInfo.requestGenerator
  self.dataGenerator = tableInfo.dataGenerator
  self.page = tableInfo.page ? 1 : tableInfo.page
  self.createURL = tableInfo.createURL ? tableInfo.createURL : null

  var tableIDs = {}
  tableIDs.id = self.id + 'SAT'
  tableIDs.filterBtn = tableIDs.id + 'FB'
  tableIDs.filterDiv = tableIDs.id + 'FD'
  tableIDs.filterForm = tableIDs.id + 'F'
  tableIDs.searchForm = tableIDs.id + 'SF'
  tableIDs.searchInput = tableIDs.id + 'SI'
  tableIDs.pageNumberForm = tableIDs.id + 'PNF'
  tableIDs.pageNumber = tableIDs.id + 'PN'
  tableIDs.pageClass = tableIDs.id + 'PC'
  tableIDs.headTr = tableIDs.id + 'HT'
  tableIDs.body = tableIDs.id + 'TB'
  tableIDs.orderingBtn = tableIDs.id + 'OB'
  self.tableIDs = tableIDs

  var dom = {}
  dom.filter = {}
  dom.search = {}
  dom.pagination = {}
  dom.table = {}
  dom.pageNumber = {}
  self.dom = dom
}

SATable.flushTable = function() {
  $(this.dom.table.body).empty()
  $(this.dom.table.headTr).empty()
}

SATable.setLoading = function() {
  var self = this
  var getDom = SATable.getDom

  self.flushTable()
  var div = getDom.Div('row justify-content-sm-center jumbotron bg-faded')
  var divContent = getDom.Div('col-1')
  var icon = getDom.IconLoading()
  $(divContent).append(icon)
  $(div).append(divContent)
  $(self.dom.table.headTr).append(div)
}

SATable.getRequest = function() {
  var self = this
  var dom = self.dom
  var request = {}

  // 生成筛选信息
  if (self.hasFilter) {
    var filterData = SATable.getFormData(dom.filter.form)
    var filters = {}
    for (var i in filterData) {
      var it = filterData[i]
      if (it) {
        filters[i] = it
      }
    }
    request.filters = filters
  }

  // 生成搜索信息
  if (self.hasSearch) {
    var searchData = SATable.getFormData(dom.search.form)
    var search = searchData.search
    if (search) {
      request.search = search
    }
  }

  // 获得每页显示结果数量
  var pageNumberData = SATable.getFormData(dom.pageNumber.form)
  var pageNumber = pageNumberData.pageNumber
  request.limit = pageNumber

  // 获得欲显示的页数
  var curPage = self.curPage
  request.page = curPage ? curPage : 1


}

SATable.update = function() {
  var self = this
  var getDom = getDom
  var dom = self.dom

  self.setLoading()

  self.getRequest()
}

SATable.SimpleAjaxTable = function(tableInfo) {
  saTable = {
    hasFilter: SATable.hasFilter,
    hasSearch: SATable.hasSearch,
    createFilterForm: SATable.createFilterForm,
    createHead: SATable.createHead,
    createBarUp: SATable.createBarUp,
    createBarBottom: SATable.createBarBottom,
    createTable: SATable.createTable,
    flushTable: SATable.flushTable,
    getRequest: SATable.getRequest,
    initTable: SATable.initTable,
    initData: SATable.initData,
    setLoading: SATable.setLoading,
    update: SATable.update,
  }
  saTable.initData(tableInfo)
  saTable.initTable()
  saTable.update()
}