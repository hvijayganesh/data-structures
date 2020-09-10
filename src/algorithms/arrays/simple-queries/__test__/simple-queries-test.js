const simpleQueries = require('../simple-queries');

let A = [ 39, 99, 70, 24, 49, 13, 86, 43, 88, 74, 45, 92, 72, 71, 90, 32, 19, 76, 84, 46, 63, 15, 87, 1, 39, 58, 17, 65, 99, 43, 83, 29, 64, 67, 100, 14, 17, 100, 81, 26, 45, 40, 95, 94, 86, 2, 89, 57, 52, 91, 45 ];

//A = [ 39, 99, 70, 24, 49, 13, 86, 43, 88, 74 ]

let B = [ 1221, 360, 459, 651, 958, 584, 345, 181, 536, 116, 1310, 403, 669, 1044, 1281, 711, 222, 280, 1255, 257, 811, 409, 698, 74, 838 ];

//B = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

C = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ]
D = [ 500500, 500499, 500498, 500497, 500496, 500495, 500494, 500493, 500492, 500491, 500490, 500489, 500488, 500487, 500486, 500485, 500484, 500483, 500482, 500481, 500480, 500479, 500478, 500477, 500476, 500475, 500474, 500473, 500472, 500471, 500470, 500469, 500468, 500467, 500466, 500465, 500464, 500463, 500462, 500461, 500460, 500459, 500458, 500457, 500456, 500455, 500454, 500453, 500452, 500451, 500450, 500449, 500448, 500447, 500446, 500445, 500444, 500443, 500442, 500441, 500440, 500439, 500438, 500437, 500436, 500435, 500434, 500433, 500432, 500431, 500430, 500429, 500428, 500427, 500426, 500425, 500424, 500423, 500422, 500421, 500420, 500419, 500418, 500417, 500416, 500415, 500414, 500413, 500412, 500411, 500410, 500409, 500408, 500407, 500406, 500405, 500404, 500403, 500402, 500401, 500400, 500399, 500398, 500397, 500396, 500395, 500394, 500393, 500392, 500391, 500390, 500389, 500388, 500387, 500386, 500385, 500384, 500383, 500382, 500381, 500380, 500379, 500378, 500377, 500376, 500375, 500374, 500373, 500372, 500371, 500370, 500369, 500368, 500367, 500366, 500365, 500364, 500363, 500362, 500361, 500360, 500359, 500358, 500357, 500356, 500355, 500354, 500353, 500352, 500351, 500350, 500349, 500348, 500347, 500346, 500345, 500344, 500343, 500342, 500341, 500340, 500339, 500338, 500337, 500336, 500335, 500334, 500333, 500332, 500331, 500330, 500329, 500328, 500327, 500326, 500325, 500324, 500323, 500322, 500321, 500320, 500319, 500318, 500317, 500316, 500315, 500314, 500313, 500312, 500311, 500310, 500309, 500308, 500307, 500306, 500305, 500304, 500303, 500302, 500301, 500300, 500299, 500298, 500297, 500296, 500295, 500294, 500293, 500292, 500291, 500290, 500289, 500288, 500287, 500286, 500285, 500284, 500283, 500282, 500281, 500280, 500279, 500278, 500277, 500276, 500275, 500274, 500273, 500272, 500271, 500270, 500269, 500268, 500267, 500266, 500265, 500264, 500263, 500262, 500261, 500260, 500259, 500258, 500257, 500256, 500255, 500254, 500253, 500252, 500251, 500250, 500249, 500248, 500247, 500246, 500245, 500244, 500243, 500242, 500241, 500240, 500239, 500238, 500237, 500236, 500235, 500234, 500233, 500232, 500231, 500230, 500229, 500228, 500227, 500226, 500225, 500224, 500223, 500222, 500221, 500220, 500219, 500218, 500217, 500216, 500215, 500214, 500213, 500212, 500211, 500210, 500209, 500208, 500207, 500206, 500205, 500204, 500203, 500202, 500201, 500200, 500199, 500198, 500197, 500196, 500195, 500194, 500193, 500192, 500191, 500190, 500189, 500188, 500187, 500186, 500185, 500184, 500183, 500182, 500181, 500180, 500179, 500178, 500177, 500176, 500175, 500174, 500173, 500172, 500171, 500170, 500169, 500168, 500167, 500166, 500165, 500164, 500163, 500162, 500161, 500160, 500159, 500158, 500157, 500156, 500155, 500154, 500153, 500152, 500151, 500150, 500149, 500148, 500147, 500146, 500145, 500144, 500143, 500142, 500141, 500140, 500139, 500138, 500137, 500136, 500135, 500134, 500133, 500132, 500131, 500130, 500129, 500128, 500127, 500126, 500125, 500124, 500123, 500122, 500121, 500120, 500119, 500118, 500117, 500116, 500115, 500114, 500113, 500112, 500111, 500110, 500109, 500108, 500107, 500106, 500105, 500104, 500103, 500102, 500101, 500100, 500099, 500098, 500097, 500096, 500095, 500094, 500093, 500092, 500091, 500090, 500089, 500088, 500087, 500086, 500085, 500084, 500083, 500082, 500081, 500080, 500079, 500078, 500077, 500076, 500075, 500074, 500073, 500072, 500071, 500070, 500069, 500068, 500067, 500066, 500065, 500064, 500063, 500062, 500061, 500060, 500059, 500058, 500057, 500056, 500055, 500054, 500053, 500052, 500051, 500050, 500049, 500048, 500047, 500046, 500045, 500044, 500043, 500042, 500041, 500040, 500039, 500038, 500037, 500036, 500035, 500034, 500033, 500032, 500031, 500030, 500029, 500028, 500027, 500026, 500025, 500024, 500023, 500022, 500021, 500020, 500019, 500018, 500017, 500016, 500015, 500014, 500013, 500012, 500011, 500010, 500009, 500008, 500007, 500006, 500005, 500004, 500003, 500002, 500001, 500000, 499999, 499998, 499997, 499996, 499995, 499994, 499993, 499992, 499991, 499990, 499989, 499988, 499987, 499986, 499985, 499984, 499983, 499982, 499981, 499980, 499979, 499978, 499977, 499976, 499975, 499974, 499973, 499972, 499971, 499970, 499969, 499968, 499967, 499966, 499965, 499964, 499963, 499962, 499961, 499960, 499959, 499958, 499957, 499956, 499955, 499954, 499953, 499952, 499951, 499950, 499949, 499948, 499947, 499946, 499945, 499944, 499943, 499942, 499941, 499940, 499939, 499938, 499937, 499936, 499935, 499934, 499933, 499932, 499931, 499930, 499929, 499928, 499927, 499926, 499925, 499924, 499923, 499922, 499921, 499920, 499919, 499918, 499917, 499916, 499915, 499914, 499913, 499912, 499911, 499910, 499909, 499908, 499907, 499906, 499905, 499904, 499903, 499902, 499901, 499900, 499899, 499898, 499897, 499896, 499895, 499894, 499893, 499892, 499891, 499890, 499889, 499888, 499887, 499886, 499885, 499884, 499883, 499882, 499881, 499880, 499879, 499878, 499877, 499876, 499875, 499874, 499873, 499872, 499871, 499870, 499869, 499868, 499867, 499866, 499865, 499864, 499863, 499862, 499861, 499860, 499859, 499858, 499857, 499856, 499855, 499854, 499853, 499852, 499851, 499850, 499849, 499848, 499847, 499846, 499845, 499844, 499843, 499842, 499841, 499840, 499839, 499838, 499837, 499836, 499835, 499834, 499833, 499832, 499831, 499830, 499829, 499828, 499827, 499826, 499825, 499824, 499823, 499822, 499821, 499820, 499819, 499818, 499817, 499816, 499815, 499814, 499813, 499812, 499811, 499810, 499809, 499808, 499807, 499806, 499805, 499804, 499803, 499802, 499801, 499800, 499799, 499798, 499797, 499796, 499795, 499794, 499793, 499792, 499791, 499790, 499789, 499788, 499787, 499786, 499785, 499784, 499783, 499782, 499781, 499780, 499779, 499778, 499777, 499776, 499775, 499774, 499773, 499772, 499771, 499770, 499769, 499768, 499767, 499766, 499765, 499764, 499763, 499762, 499761, 499760, 499759, 499758, 499757, 499756, 499755, 499754, 499753, 499752, 499751, 499750, 499749, 499748, 499747, 499746, 499745, 499744, 499743, 499742, 499741, 499740, 499739, 499738, 499737, 499736, 499735, 499734, 499733, 499732, 499731, 499730, 499729, 499728, 499727, 499726, 499725, 499724, 499723, 499722, 499721, 499720, 499719, 499718, 499717, 499716, 499715, 499714, 499713, 499712, 499711, 499710, 499709, 499708, 499707, 499706, 499705, 499704, 499703, 499702, 499701, 499700, 499699, 499698, 499697, 499696, 499695, 499694, 499693, 499692, 499691, 499690, 499689, 499688, 499687, 499686, 499685, 499684, 499683, 499682, 499681, 499680, 499679, 499678, 499677, 499676, 499675, 499674, 499673, 499672, 499671, 499670, 499669, 499668, 499667, 499666, 499665, 499664, 499663, 499662, 499661, 499660, 499659, 499658, 499657, 499656, 499655, 499654, 499653, 499652, 499651, 499650, 499649, 499648, 499647, 499646, 499645, 499644, 499643, 499642, 499641, 499640, 499639, 499638, 499637, 499636, 499635, 499634, 499633, 499632, 499631, 499630, 499629, 499628, 499627, 499626, 499625, 499624, 499623, 499622, 499621, 499620, 499619, 499618, 499617, 499616, 499615, 499614, 499613, 499612, 499611, 499610, 499609, 499608, 499607, 499606, 499605, 499604, 499603, 499602, 499601, 499600, 499599, 499598, 499597, 499596, 499595, 499594, 499593, 499592, 499591, 499590, 499589, 499588, 499587, 499586, 499585, 499584, 499583, 499582, 499581, 499580, 499579, 499578, 499577, 499576, 499575, 499574, 499573, 499572, 499571, 499570, 499569, 499568, 499567, 499566, 499565, 499564, 499563, 499562, 499561, 499560, 499559, 499558, 499557, 499556, 499555, 499554, 499553, 499552, 499551, 499550, 499549, 499548, 499547, 499546, 499545, 499544, 499543, 499542, 499541, 499540, 499539, 499538, 499537, 499536, 499535, 499534, 499533, 499532, 499531, 499530, 499529, 499528, 499527, 499526, 499525, 499524, 499523, 499522, 499521, 499520, 499519, 499518, 499517, 499516, 499515, 499514, 499513, 499512, 499511, 499510, 499509, 499508, 499507, 499506, 499505, 499504, 499503, 499502, 499501 ]


A = [1, 2, 4]
B = [1,2,3,4,5,6]

A = [ 461, 348, 28, 566, 978, 689, 914, 892, 435, 81, 599, 879, 453, 125, 741, 168, 50, 383, 999, 402, 416, 204, 350, 814, 811, 537]
B = [ 1, 2, 3, 4]

console.log("result", simpleQueries.solve(A, B));