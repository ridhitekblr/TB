(function($) {
  'use strict';
  $(function() {
    if ($("#order-chart").length) {
      const ctx = document.getElementById('order-chart');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ["Dehradun", "Haridwar", "Nainital", "Pauri Garhwal", "Almora", "Chamoli", "Bageshwar", "Champawat", "Pithoragarh", "Rudraprayag"],
          datasets: [
            {
              data: [10000, 5000, 7000, 4000, 6000, 5500, 4500, 3500, 2500, 3000],
              borderColor: '#4e73df',
              borderWidth: 2,
              fill: false,
              label: "Patients Started Treatment",
              pointRadius: 0,
            },
            {
              data: [8000, 4000, 5600, 3200, 4800, 4400, 3600, 2800, 2000, 2400],
              borderColor: '#1cc88a',
              borderWidth: 2,
              fill: false,
              label: "Patients Completing Treatment",
              pointRadius: 0,
            },
            {
              data: [1000, 500, 700, 400, 600, 550, 450, 350, 250, 300],
              borderColor: '#e74a3b',
              borderWidth: 2,
              fill: false,
              label: "Patients Dropped Out",
              pointRadius: 0,
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          elements: {
            line: {
                tension: .6,
            }
          },
          scales: {
            x: {
              border: {
                display: false
              },
              grid: {
                display: false,
                drawTicks: true,
              },
              ticks: {
                color: "#6C7383",
                title: {
                  display: true,
                  text: "Districts"
                }
              },
            },
            y: {
              border: {
                display: false
              },
              grid: {
                display: true,
              },
              ticks: {
                color: "#6C7383",
                stepSize: 2000,
                title: {
                  display: true,
                  text: "Patient Count"
                }
              },
            }
          },
          plugins: {
            legend: {
              display: true,
              position: 'top'
            },
            title: {
              display: true,
              text: "TB Treatment Progress Trend"
            }
          }
        },
      });
    }

    if ($("#sales-chart").length) {
      const ctx = document.getElementById('sales-chart');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ["Dehradun", "Haridwar", "Nainital", "Pauri Garhwal", "Almora"],
          datasets: [
            {
              label: 'New TB Cases',
              data: [10000, 5000, 7000, 4000, 6000],
              backgroundColor: '#4e73df',
              borderRadius: 5,
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          scales: {
            x: {
              border: {
                display: false
              },
              grid: {
                display: false,
                drawTicks: true,
                color: "rgba(0, 0, 0, 0)",
              },
              ticks: {
                display: true,
                color: "#6C7383",
                title: {
                  display: true,
                  text: "Districts"
                }
              },
            },
            y: {
              border: {
                display: false
              },
              grid: {
                display: true,
              },
              ticks: {
                color: "#6C7383",
                beginAtZero: true,
                maxTicksLimit: 10,
                callback: function(value) {
                  return value;
                },
                title: {
                  display: true,
                  text: "Number of Cases"
                }
              },
            }
          },
          plugins: {
            legend: {
              display: true,
              position: 'top'
            },
            title: {
              display: true,
              text: "New TB Case Registrations by District"
            }
          }
        },
        plugins: [{
          afterDatasetUpdate: function (chart) {
            const chartId = chart.canvas.id;
            const legendId = `${chartId}-legend`;
            const ul = document.createElement('ul');
            for (let i = 0; i < chart.data.datasets.length; i++) {
              ul.innerHTML += `
                <li>
                  <span style="background-color: ${chart.data.datasets[i].backgroundColor}"></span>
                  ${chart.data.datasets[i].label}
                </li>
              `;
            }
            document.getElementById(legendId).innerHTML = '';
            return document.getElementById(legendId).appendChild(ul);
          }
        }]
      });
    }

    if ($("#north-america-chart").length) { 
      const doughnutChartCanvas = document.getElementById('north-america-chart');
      new Chart(doughnutChartCanvas, {
        type: 'doughnut',
        data: {
          labels: ["Cured", "Under Treatment", "Dropped Out"],
          datasets: [{
            data: [60, 30, 10],
            backgroundColor: ["#4e73df", "#1cc88a", "#e74a3b"],
            borderColor: "rgba(0,0,0,0)"
          }]
        },
        options: {
          cutout: 70,
          animationEasing: "easeOutBounce",
          animateRotate: true,
          animateScale: false,
          responsive: true,
          maintainAspectRatio: true,
          showScale: false,
          plugins: {
            legend: {
              display: false,
            },
            title: {
              display: true,
              text: "Treatment Outcome Distribution"
            }
          }
        },
        plugins: [{
          afterDatasetUpdate: function (chart) {
            const chartId = chart.canvas.id;
            const legendId = `${chartId}-legend`;
            const ul = document.createElement('ul');
            for (let i = 0; i < chart.data.datasets[0].data.length; i++) {
              ul.innerHTML += `
                <li>
                  <span style="background-color: ${chart.data.datasets[0].backgroundColor[i]}"></span>
                  ${chart.data.labels[i]} - ${chart.data.datasets[0].data[i]}%
                </li>
              `;
            }
            document.getElementById(legendId).innerHTML = '';
            return document.getElementById(legendId).appendChild(ul);
          }
        }]
      });
    }

    if ($("#south-america-chart").length) { 
      const doughnutChartCanvas = document.getElementById('south-america-chart');
      new Chart(doughnutChartCanvas, {
        type: 'doughnut',
        data: {
          labels: ["Cured", "Under Treatment", "Dropped Out"],
          datasets: [{
            data: [60, 30, 10],
            backgroundColor: ["#4e73df", "#1cc88a", "#e74a3b"],
            borderColor: "rgba(0,0,0,0)"
          }]
        },
        options: {
          cutout: 70,
          animationEasing: "easeOutBounce",
          animateRotate: true,
          animateScale: false,
          responsive: true,
          maintainAspectRatio: true,
          showScale: false,
          plugins: {
            legend: {
              display: false,
            },
            title: {
              display: true,
              text: "Treatment Outcome Distribution"
            }
          }
        },
        plugins: [{
          afterDatasetUpdate: function (chart) {
            const chartId = chart.canvas.id;
            const legendId = `${chartId}-legend`;
            const ul = document.createElement('ul');
            for (let i = 0; i < chart.data.datasets[0].data.length; i++) {
              ul.innerHTML += `
                <li>
                  <span style="background-color: ${chart.data.datasets[0].backgroundColor[i]}"></span>
                  ${chart.data.labels[i]} - ${chart.data.datasets[0].data[i]}%
                </li>
              `;
            }
            document.getElementById(legendId).innerHTML = '';
            return document.getElementById(legendId).appendChild(ul);
          }
        }]
      });
    }

    // Retain original banner and DataTable code
    if ($.cookie('skydash-pro-banner') != "true") {
      document.querySelector('#proBanner').classList.add('d-flex');
      document.querySelector('.navbar').classList.remove('fixed-top');
    } else {
      document.querySelector('#proBanner').classList.add('d-none');
      document.querySelector('.navbar').classList.add('fixed-top');
    }
    
    if ($(".navbar").hasClass("fixed-top")) {
      document.querySelector('.page-body-wrapper').classList.remove('pt-0');
      document.querySelector('.navbar').classList.remove('pt-5');
    } else {
      document.querySelector('.page-body-wrapper').classList.add('pt-0');
      document.querySelector('.navbar').classList.add('pt-5');
      document.querySelector('.navbar').classList.add('mt-3');
    }
    
    document.querySelector('#bannerClose').addEventListener('click', function() {
      document.querySelector('#proBanner').classList.add('d-none');
      document.querySelector('#proBanner').classList.remove('d-flex');
      document.querySelector('.navbar').classList.remove('pt-5');
      document.querySelector('.navbar').classList.add('fixed-top');
      document.querySelector('.page-body-wrapper').classList.add('pt-5');
      document.querySelector('.navbar').classList.remove('mt-3');
      var date = new Date();
      date.setTime(date.getTime() + 24 * 60 * 60 * 1000); 
      $.cookie('skydash-pro-banner', "true", { expires: date });
    });

    function format(d) {
      return '<table cellpadding="5" cellspacing="0" border="0" style="width:100%;">'+
          '<tr class="expanded-row">'+
              '<td colspan="8" class="row-bg"><div><div class="d-flex justify-content-between"><div class="cell-hilighted"><div class="d-flex mb-2"><div class="me-2 min-width-cell"><p>Policy start date</p><h6>25/04/2020</h6></div><div class="min-width-cell"><p>Policy end date</p><h6>24/04/2021</h6></div></div><div class="d-flex"><div class="me-2 min-width-cell"><p>Sum insured</p><h5>$26,000</h5></div><div class="min-width-cell"><p>Premium</p><h5>$1200</h5></div></div></div><div class="expanded-table-normal-cell"><div class="me-2 mb-4"><p>Quote no.</p><h6>Incs234</h6></div><div class="me-2"><p>Vehicle Reg. No.</p><h6>KL-65-A-7004</h6></div></div><div class="expanded-table-normal-cell"><div class="me-2 mb-4"><p>Policy number</p><h6>Incsq123456</h6></div><div class="me-2"><p>Policy number</p><h6>Incsq123456</h6></div></div><div class="expanded-table-normal-cell"><div class="me-2 mb-3 d-flex"><div class="highlighted-alpha"> A</div><div><p>Agent / Broker</p><h6>Abcd Enterprices</h6></div></div><div class="me-2 d-flex"> <img src="../assets/images/faces/face5.jpg" alt="profile"/><div><p>Policy holder Name & ID Number</p><h6>Phillip Harris / 1234567</h6></div></div></div><div class="expanded-table-normal-cell"><div class="me-2 mb-4"><p>Branch</p><h6>Koramangala, Bangalore</h6></div></div><div class="expanded-table-normal-cell"><div class="me-2 mb-4"><p>Channel</p><h6>Online</h6></div></div></div></div></td>'
          '</tr>'+
      '</table>';
    }
    
    var table = $('#example').DataTable({
      "ajax": "../assets/js/data.txt",
      "columns": [
          { "data": "Quote" },
          { "data": "Product" },
          { "data": "Business" },
          { "data": "Policy" }, 
          { "data": "Premium" }, 
          { "data": "Status" }, 
          { "data": "Updated" }, 
          {
            "className": 'details-control',
            "orderable": false,
            "data": null,
            "defaultContent": ''
          }
      ],
      "order": [[1, 'asc']],
      "paging": false,
      "ordering": true,
      "info": false,
      "filter": false,
      columnDefs: [{
        orderable: false,
        className: 'select-checkbox',
        targets: 0
      }],
      select: {
        style: 'os',
        selector: 'td:first-child'
      }
    });
    
    $('#example tbody').on('click', 'td.details-control', function () {
      var tr = $(this).closest('tr');
      var row = table.row(tr);
      if (row.child.isShown()) {
        row.child.hide();
        tr.removeClass('shown');
      } else {
        row.child(format(row.data())).show();
        tr.addClass('shown');
      }
    });
  });
})(jQuery);