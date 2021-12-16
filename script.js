const labels =["01/19","02/19","03/19","04/19","05/19","06/19","07/19","08/19","09/19","10/19","11/19","12/19","01/20","02/20","03/20","04/20","05/20","06/20","07/20","08/20","09/20","10/20","11/20","12/20","01/21","02/21","03/21","04/21","05/21","06/21","07/21","08/21","09/21","10/21", "11/21"];
//    console.log("labels");
//    console.log(labels);

// These are colors from chart.js utils
const CHART_COLORS = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  pink: 'rgb(247, 30, 223)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  turquoise: 'rgb(64, 224, 208)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(201, 203, 207)',
  burgundy: 'rgb(128, 0, 32)',
  violet: 'rgb(127,0,255)',
  brown: 'rgb(165,42,42)',
  olive: 'rgb(128,128,0)',
  lime: 'rgb(0,255,0)',
  navy: 'rgb(0,0,128)',
  teal: 'rgb(0,128,128)',
  cyan: 'rgb(0,255,255)',
  darkgreen: 'rgb(0,100,0)',
  forestgreen: 'rgb(34,139,34)',
  gold: 'rgb(255,215,0)',
  indigo: 'rgb(75,0,130)'
};
//    console.dir(CHART_COLORS);

const CHART_COLORS_50_Percent = {
  red: 'rgba(255, 99, 132, 0.5)',
  orange: 'rgba(255, 159, 64, 0.5)',
  pink: 'rgba(247, 30, 223, 0.5)',
  green: 'rgba(75, 192, 192, 0.5)',
  blue: 'rgba(54, 162, 235, 0.5)',
  turquoise: 'rgba(64, 224, 208,0.5)',
  purple: 'rgba(153, 102, 255, 0.5)',
  grey: 'rgba(201, 203, 207, 0.5)',
  burgundy: 'rgba(128, 0, 32, 0.5)',
  violet: 'rbg(127,0,255,0.5)',
  brown: 'rgb(165,42,42,0.5)',
  olive: 'rgb(128,128,0,0.5)',
  lime: 'rgb(0,255,0,0.5)',
  navy: 'rgb(0,0,128,0.5)',
  teal: 'rgb(0,128,128,0.5)',
  darkgreen: 'rgb(0,100,0,0.5)',
  forestgreen: 'rgb(34,139,34,0.5)',
  cyan: 'rgb(0,255,255,0.5)',
  gold: 'rgb(255,215,0,0.5)',
  indigo: 'rgb(75,0,130,0.5)'

};
//    console.log(CHART_COLORS_50_Percent);
//    end utils

const data = {
  labels: labels,
  datasets: [
    {
      label: 'Education and Health Services',
      data: [23724, 24044, 24113, 24202, 24113, 23928, 23848, 23960, 24234, 24534, 24651, 24599, 24364, 24668, 24471, 21880, 22153, 22491, 22590, 22782, 23086, 23427, 23510, 23400, 23105, 23388, 23518, 23597, 23525, 23347, 23319, 23356, 23584, 23917, 24006],
      borderColor: CHART_COLORS.red,
      backgroundColor: CHART_COLORS_50_Percent.red,
      hidden: true
    },
    {
      label: 'Mining and Loggin',
      data: [733, 730, 731, 730, 734, 740, 737, 733, 725, 727, 711, 693, 678, 675, 669, 615, 602, 600, 599, 595, 597, 597, 599, 602, 593, 589, 610, 612, 619, 634, 642, 646, 646, 653, 648],
      borderColor: CHART_COLORS.pink,
      backgroundColor: CHART_COLORS_50_Percent.pink,
      hidden: true
    },
    {
      label: 'Leisure and hospitality',
      data: [15739, 15841, 16090, 16409, 16793, 17227, 17299, 17257, 16775, 16666, 16459, 16474, 16117, 16292, 15745, 8648, 10303, 12673, 13364, 13445, 13446, 13607, 13418, 12896, 12576, 13065, 13448, 14020, 14625, 15397, 15864, 15826, 15397, 15435, 15332],
      borderColor: CHART_COLORS.orange,
      backgroundColor: CHART_COLORS_50_Percent.orange,
      hidden: true
    },
    {
      label: 'Financial Activities',
      data: [8618, 8633, 8658, 8680, 8712, 8790, 8844, 8846, 8788, 8819, 8822, 8839, 8783, 8820, 8805, 8555, 8593, 8675, 8709, 8730, 8710, 8751, 8763, 8788, 8733, 8732, 8750, 8770, 8784, 8842, 8897, 8901, 8860, 8907, 8915],
      borderColor: CHART_COLORS.green,
      backgroundColor: CHART_COLORS_50_Percent.green,
      hidden: true
    },
    {
      label: 'Information',
      data: [2799, 2830, 2838, 2833, 2845, 2878, 2888, 2893, 2867, 2883, 2909, 2906, 2868, 2894, 2888, 2630, 2585, 2606, 2606, 2622, 2652, 2654, 2659, 2668, 2648, 2672, 2675, 2695, 2706, 2730, 2761, 2784, 2771, 2790, 2797],
      borderColor: CHART_COLORS.blue,
      backgroundColor: CHART_COLORS_50_Percent.blue,
      hidden: true
    },
    {
      label: 'Professional and Busines Services',
      data: [20709, 20841, 20908, 21159, 21219, 21398, 21414, 21470, 21418, 21604, 21645, 21508, 21036, 21134, 21050, 19053, 19238, 19683, 19856, 20060, 20115, 20505, 20580, 20638, 20291, 20449, 20549, 20710, 20759, 20918, 21067, 21182, 21207, 21603, 21708],
      borderColor: CHART_COLORS.turquoise,
      backgroundColor: CHART_COLORS_50_Percent.turquoise,
      hidden: true
    },
    {
      label: 'Other Services',
      data: [5775, 5797, 5833, 5882, 5912, 5968, 5976, 5948, 5891, 5903, 5906, 5896, 5856, 5882, 5805, 4519, 4797, 5217, 5388, 5425, 5426, 5487, 5475, 5448, 5415, 5457, 5504, 5567, 5608, 5729, 5786, 5783, 5726, 5773, 5781],
      borderColor: CHART_COLORS.purple,
      backgroundColor: CHART_COLORS_50_Percent.purple,
      hidden: true
    },
    {
      label: 'Government',
      data: [22378, 22793, 22886, 22952, 22867, 22476, 21325, 21697, 22672, 23060, 23195, 23057, 22650, 23094, 23127, 22219, 21619, 21234, 20310, 21024, 21845, 21987, 21993, 21800, 21453, 21764, 21894, 21990, 21949, 21668, 20762, 21069, 21959, 22204, 22311],
      borderColor: CHART_COLORS.grey,
      backgroundColor: CHART_COLORS_50_Percent.grey,
      hidden: true
    },
    {
      label: 'Total Nonfarm',
      data: [147978, 148684, 149359, 150421, 151094, 151716, 150658, 151094, 151511, 152500, 153095, 152846, 150055, 150968, 149952, 130251, 133419, 138501, 139107, 140728, 141946, 143568, 144121, 143602, 140980, 142133, 143315, 144397, 145355, 146578, 146536, 147012, 147650, 149226, 150004],
      borderColor: CHART_COLORS.burgundy,
      backgroundColor: CHART_COLORS_50_Percent.burgundy,
      hidden: true
    },
    {
      label: 'Service Providing',
      data: [127340, 128130, 128684, 129544, 130020, 130371, 129273, 129701, 130236, 131276, 131952, 131881, 129429, 130288, 129314, 111815, 114118, 118473, 118977, 120540, 121792, 123307, 123918, 123437, 121178, 122330, 123235, 124194, 124985, 125949, 125794, 126230, 126913, 128390, 129193],
      borderColor: CHART_COLORS.violet,
      backgroundColor: CHART_COLORS_50_Percent.violet,
      hidden: true
    },
    {
      label: 'Goods Producing',
      data: [20539, 20554, 20675, 20877, 21074, 21345, 21385, 21393, 21275, 21224, 21143, 20965, 20626, 20680, 20638, 18436, 19301, 20028, 20130, 20188, 20154, 20261, 20203, 20165, 19802, 19803, 20080, 20203, 20370, 20629, 20742, 20782, 20737, 20836, 20811],
      borderColor: CHART_COLORS.brown,
      backgroundColor: CHART_COLORS_50_Percent.brown,
      hidden: true
    },
    {
      label: 'Total Private',
      data: [125501, 125891, 126473, 127469, 128227, 129240, 129333, 129397, 128839, 129440, 129900, 129789, 127405, 127874, 126825, 108032, 111800, 117267, 118797, 119704, 120101, 121581, 122128, 121802, 119527, 120369, 121421, 122407, 123406, 124910, 125774, 125943, 125691, 127022, 127693],
      borderColor: CHART_COLORS.olive,
      backgroundColor: CHART_COLORS_50_Percent.olive,
      hidden: true
    },
    {
      label: 'Private Service Providing',
      data: [104962, 105337, 105798, 106592, 107153, 107895, 107948, 108004, 107564, 108216, 108757, 108824, 106779, 107194, 106187, 89596, 92499, 97239, 98667, 99516, 99947, 101320, 101925, 101637, 99725, 100566, 101341, 102204, 103036, 104281, 105032, 105161, 104954, 106186, 106882],
      borderColor: CHART_COLORS.lime,
      backgroundColor: CHART_COLORS_50_Percent.lime,
      hidden: true
    },
    {
      label: 'Construction',
      data: [7069, 7062, 7170, 7378, 7541, 7700, 7754, 7761, 7703, 7721, 7610, 7450, 7243, 7278, 7297, 6452, 7070, 7359, 7424, 7460, 7419, 7506, 7413, 7312, 7067, 7008, 7203, 7365, 7476, 7598, 7640, 7644, 7626, 7666, 7605],
      borderColor: CHART_COLORS.navy,
      backgroundColor: CHART_COLORS_50_Percent.navy,
      hidden: true
    },
    {
      label: 'Manufacturing',
      data: [12737, 12762, 12774, 12769, 12799, 12905, 12894, 12899, 12847, 12776, 12822, 12822, 12705, 12727, 12672, 11369, 11629, 12069, 12107, 12133, 12138, 12158, 12191, 12251, 12142, 12206, 12267, 12226, 12275, 12397, 12460, 12492, 12465, 12517, 12558],
      borderColor: CHART_COLORS.teal,
      backgroundColor: CHART_COLORS_50_Percent.teal,
      hidden: true
    },
    {
      label: 'Trade, Transportation, and Utilities',
      data: [27598, 27351, 27358, 27427, 27559, 27706, 27679, 27630, 27591, 27807, 28365, 28602, 27755, 27504, 27423, 24311, 24830, 25930, 26154, 26452, 26512, 26889, 27520, 27799, 26957, 26803, 26897, 26845, 27029, 27318, 27338, 27329, 27409, 27761, 28343],
      borderColor: CHART_COLORS.cyan,
      backgroundColor: CHART_COLORS_50_Percent.cyan,
      hidden: true
    },
    {
      label: 'Durable Goods',
      data: [8023, 8035, 8039, 8033, 8042, 8102, 8072, 8071, 8034, 7974, 8023, 8025, 7967, 7978, 7949, 7049, 7195, 7520, 7523, 7524, 7532, 7538, 7570, 7609, 7551, 7590, 7630, 7599, 7628, 7710, 7728, 7754, 7739, 7776, 7795],
      borderColor: CHART_COLORS.darkgreen,
      backgroundColor: CHART_COLORS_50_Percent.darkgreen,
      hidden: true
    },
    {
      label: 'Wholesale Trade',
      data: [15739, ],
      borderColor: CHART_COLORS.pink,
      backgroundColor: CHART_COLORS_50_Percent.blue,
      hidden: true
    },
    {
      label: 'Nondurable Goods',
      data: [4714, 4727, 4735, 4736, 4757, 4803, 4822, 4828, 4813, 4802, 4799, 4797, 4738, 4749, 4723, 4320, 4434, 4549, 4584, 4609, 4606, 4620, 4621, 4642, 4591, 4616, 4637, 4627, 4647, 4687, 4732, 4738, 4726, 4741, 4763],
      borderColor: CHART_COLORS.forestgreen,
      backgroundColor: CHART_COLORS_50_Percent.forestgreen,
      hidden: true
    },
    {
      label: 'Transportation and warehousing',
      data: [5582.6, 5521.1, 5525.3, 5538.3, 5589.8, 5632.8, 5597.8, 5607.0, 5706.3, 5754.8, 5741.7, 5168.3, 5181.9, 5304.4, 5300.6, 5380.1, 5504.6, 5622.5, 5876.7, 5998.4, 5706.7, 5659.0, 5683.6, 5608.9, 5646.3, 5708.0, 5703.0, 5746.8, 5870.1, 5977.9, 6210.8 ],
      borderColor: CHART_COLORS.gold,
      backgroundColor: CHART_COLORS_50_Percent.gold,
      hidden: true
    },
    {
      label: 'Retail Trade',
      data: [15628.1, 15429.4, 15425.8, 15468.0, 15528.0, 15603.9, 15608.1, 15564.2, 15449.8, 15603.0, 16028.0, 16102.1, 15508.4, 15353.9, 15286.8, 13131.5, 13600.0, 14503.4, 14748.0, 14965.5, 14891.9, 15131.1, 15487.9, 15628.2, 15111.0, 14995.9, 15041.2, 15047.7, 15164.0, 15339.3, 15347.5, 15309.1, 15279.6, 15500.1, 15831.7,],
      borderColor: CHART_COLORS.indigo,
      backgroundColor: CHART_COLORS_50_Percent.indigo,
      hidden: true
    },
    {
      label: 'Utilites',
      data: [15739, ],
      borderColor: CHART_COLORS.pink,
      backgroundColor: CHART_COLORS_50_Percent.blue,
      hidden: true
    }
  ]
};
//  console.dir(data);

const config = {
  type: 'line',
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart'
      }
    }
  }
};
//    console.log(config);

const myChart = new Chart(
  document.getElementById('myChart'),
    config);
//    console.dir(myChart);
//    console.log("Ending");
