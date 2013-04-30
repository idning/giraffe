var graphite_url = "http://tc-bae-bcsnozeta.tc.baidu.com:8000";  // enter your graphite url, e.g. http://your.graphite.com

var dashboards = 
[
  { "name": "jomo-callback",  // give your dashboard a name (required!)
    "refresh": 5000,  // each dashboard has its own refresh interval (in ms)
    // add an (optional) dashboard description. description can be written in markdown / html.
    "description": "system.load" ,
    "metrics":  // metrics is an array of charts on the dashboard
    [
      {
        "alias": "callback-count",  // display name for this metric
        "target": "jomo.callback.count",  // enter your graphite barebone target expression here
        "target": ["jomo.callback.count", "jomo.callback.lost_count"],  // enter your graphite barebone target expression here
        "description": "jomo.callback.count",  // enter your metric description here
        "summary": "max",  // available options: [sum|min|max|avg|last|<function>]
        "summary_formatter": d3.format(",f"), // customize your summary format function. see d3 formatting docs for more options
        "colspan": 2,
        "renderer": "line", 
        //"renderer": "bar", 
      },
      {
        "alias": "mongo.qps",  // display name for this metric
        "target": "mongo.qps",  // enter your graphite barebone target expression here
        "description": "mongo.qps",  // enter your metric description here
        "summary": "max",  // available options: [sum|min|max|avg|last|<function>]
        "summary_formatter": d3.format(",f"), // customize your summary format function. see d3 formatting docs for more options
        "colspan": 1,
        "renderer": "bar", 
        //"legend": 1,
      },
    ]
  }
];

var scheme = [
              '#423d4f',
              //'#4a6860',
              '#848f39',
              //'#a2b73c',
              //'#ddcb53',
              //'#c5a32f',
              //'#7d5836',
              //'#963b20',
              '#7c2626',
              ].reverse();

function relative_period() { return (typeof period == 'undefined') ? 1 : parseInt(period / 7) + 1; }
function entire_period() { return (typeof period == 'undefined') ? 1 : period; }
function at_least_a_day() { return entire_period() >= 1440 ? entire_period() : 1440; }
