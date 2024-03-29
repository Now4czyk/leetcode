const singleNumber = (nums: number[]): number => {
  const hashTable = new Set<number>();

  for (const num of nums) {
    if (!hashTable.has(num)) {
      hashTable.add(num);
    } else {
      hashTable.delete(num);
    }
  }
  return [...hashTable][0];
};

describe("136. Single Number", () => {
  it("Test 1", () => {
    expect(singleNumber([2, 2, 1])).toEqual(1);
  });
  it("Test 2", () => {
    expect(singleNumber([4, 1, 2, 1, 2])).toEqual(4);
  });
  it("Test 3", () => {
    expect(singleNumber([1])).toEqual(1);
  });
  it("Test 4", () => {
    expect(
      singleNumber([
        -899, 774, 936, -971, -297, -851, -188, 949, -229, 417, 772, 538, -231, -581, 868, 619, 482, -757, -396, 409,
        -317, 384, -524, 215, 758, 664, 623, 293, -877, -646, 8, -416, -177, -345, 554, 344, 16, -858, 26, -458, 98,
        652, 594, 31, -442, -227, -667, 160, 713, -392, -215, -661, 354, 575, 658, -352, -697, 67, -662, -248, -141,
        219, -79, -175, 921, -147, 620, -925, -983, 791, -962, 763, 636, -179, -952, -985, -520, 222, -929, 362, 440,
        -735, -367, -202, -652, 348, 167, -889, -582, -692, -574, -60, 2, 668, 890, 481, -761, -963, 691, -280, -881,
        -93, -290, -72, -410, 931, 100, -944, 617, -366, -884, -743, -585, 97, -849, 202, 961, -283, 331, 665, 450, 21,
        -862, -362, -115, -388, -372, 55, -475, 9, 306, 861, 995, -768, 852, 403, -809, 806, -700, 360, 460, -119, 701,
        760, -641, 708, 418, 262, -871, -360, -295, 761, 976, 762, -1000, -383, 345, -684, -387, 496, 957, 516, -982,
        247, -438, -174, 24, -986, 845, -969, 526, 58, -960, 919, -878, 508, -50, -659, -703, 289, -298, -791, 263, 964,
        -991, -540, -580, 302, -921, 130, 379, -563, 118, -279, 827, 15, -332, 161, -615, 807, -469, 50, -42, 860, -397,
        5, 273, -617, 347, -226, 562, 955, -898, -186, -329, 133, 683, 903, -445, 795, 1, -882, 493, -405, 696, -165,
        206, -474, -359, 896, 267, 942, 190, -270, -865, 841, 278, 927, 419, 154, -941, -527, -411, 137, 574, 944, 624,
        -326, -664, -733, -504, -631, 703, -640, -511, 637, -96, -977, 187, -848, -137, -218, 156, -497, 933, 834, 740,
        -92, 64, 375, -541, -418, -100, -830, 846, -677, -802, -178, 131, -377, -679, 388, -534, 901, -726, 332, 389,
        350, -450, -195, 663, 684, -634, 520, 357, -389, -839, -393, 288, -466, 670, 30, 250, -408, -994, 690, 745,
        -819, -53, 990, 587, -730, -864, -935, -603, 655, 28, 533, 479, -414, 907, 888, 854, -296, 447, -208, 432, -779,
        129, 753, 268, 863, -124, 334, -934, -336, 318, 499, 938, 416, -566, -482, 188, 423, 437, -164, 4, -200, -122,
        -194, -508, 238, 711, 677, -532, 121, 502, 54, 605, -888, 186, -117, 880, -128, -683, -417, -943, 837, 766,
        -584, 338, 651, -76, 198, 847, -8, 819, -807, 407, 0, 628, -896, -34, -5, -528, 741, 309, 74, 739, 707, 168,
        454, -180, 95, -589, -561, -613, -32, 377, -767, -918, -6, -185, 414, -452, -940, 214, 528, 405, -453, -242,
        -390, -327, 210, 894, -577, 586, 537, -569, 859, 434, 461, -993, 682, -308, -28, 840, -10, -996, -107, -691,
        -672, -760, -212, -491, 254, -593, -480, -234, -545, 6, 441, 110, -436, 383, -942, 474, -861, 867, -257, 339,
        433, -307, -82, 402, -384, -564, 959, 700, -403, -916, 514, 839, -399, 812, 744, -612, 364, 343, -16, -503,
        -239, -750, -519, 37, 647, 141, -21, 699, -125, -949, 390, 353, 75, -370, -391, -12, 733, -385, -338, 952, 144,
        981, 743, 750, 10, 88, -182, -404, 856, -959, 307, -754, -374, -263, 42, 395, 910, 195, 92, -759, -778, 12, 444,
        211, 134, -271, -9, 452, -252, 584, -870, -132, 633, 298, 920, -344, -899, 774, 936, -971, -297, -851, -188,
        949, -229, 417, 772, 538, -231, -581, 868, 619, 482, -757, -396, 409, -317, 384, -524, 215, 758, 664, 623, 293,
        -877, -646, 8, -416, -177, -345, 554, 344, 16, -858, 26, -458, 98, 652, 594, 31, -442, -227, -667, 160, 713,
        -392, -215, -661, 354, 575, 658, -352, -697, 67, -662, -248, -141, 219, -79, -175, 921, -147, 620, -925, -983,
        791, -962, 763, 636, -179, -952, -985, -520, 222, -929, 362, 440, -735, -367, -202, -652, 348, 167, -889, -582,
        -692, -574, -60, 2, 668, 890, 481, -761, -963, 691, -280, -881, -93, -290, -72, -410, 931, 100, -944, 617, -366,
        -884, -743, -585, 97, -849, 202, 961, -283, 331, 665, 450, 21, -862, -362, -115, -388, -372, 55, -475, 9, 306,
        861, 995, -768, 852, 403, -809, 806, -700, 360, 460, -119, 701, 760, -641, 708, 418, 262, -871, -360, -295, 761,
        976, 762, -1000, -383, 345, -684, -387, 496, 957, 516, -982, 247, -438, -174, 24, -986, 845, -969, 526, 58,
        -960, 919, -878, 508, -50, -659, -703, 289, -298, -791, 263, 964, -991, -540, -580, 302, -921, 130, 379, -563,
        118, -279, 827, 15, -332, 161, -615, 807, -469, 50, -42, 860, -397, 5, 273, -617, 347, -226, 562, 955, -898,
        -186, -329, 133, 683, 903, -445, 795, 1, -882, 493, -405, 696, -165, 206, -474, -359, 896, 267, 942, 190, -270,
        -865, 841, 278, 927, 419, 154, -941, -527, -411, 137, 574, 944, 624, -326, -664, -733, -504, -631, 703, -640,
        -511, 637, -96, -977, 187, -848, -137, -218, 156, -497, 933, 834, 740, -92, 64, 375, -541, -418, -100, -830,
        846, -677, -802, -178, 131, -377, -679, 388, -534, 901, -726, 332, 389, 350, -450, -195, 663, 684, -634, 520,
        357, -389, -839, -393, 288, -466, 670, 30, 250, -408, -994, 690, 745, -819, -53, 990, 587, -730, -864, -935,
        -603, 655, 28, 533, 479, -414, 907, 888, 854, -296, 447, -208, 432, -779, 129, 753, 268, 863, -124, 334, -934,
        -336, 318, 499, 938, 416, -566, -482, 188, 423, 437, -164, 4, -200, -122, -194, -508, 238, 711, 677, -532, 121,
        502, 54, 605, -888, 186, -117, 880, -128, -683, -417, -943, 837, 766, -584, 338, 651, -76, 198, 847, -8, 819,
        -807, 407, 0, 628, -896, -34, -5, -528, 741, 309, 74, 739, 707, 168, 454, -180, 95, -589, -561, -613, -32, 377,
        -767, -918, -6, -185, 414, -452, -940, 214, 528, 405, -453, -242, -390, -327, 210, 894, -577, 586, 537, -569,
        859, 434, 461, -993, 682, -308, -28, 840, -10, -996, -107, -691, -672, -760, -212, -491, 254, -593, -480, -234,
        -545, 6, 441, 110, -436, 383, -942, 474, -861, 867, -257, 339, 433, -307, -82, 402, -384, -564, 959, 700, -403,
        -916, 514, 839, -399, 812, 744, -612, 364, 343, -16, -503, -239, -750, -519, 37, 647, 141, -21, 699, -125, -949,
        390, 353, 75, -370, -391, -12, 733, -385, -338, 952, 144, 981, 743, 750, 10, 88, -182, -404, 856, -959, 307,
        -754, -374, -263, 42, 395, 910, 195, 92, -759, -778, 12, 444, 211, 134, -271, -9, 452, -252, 584, -870, -132,
        633, 298, 920, -344, 70,
      ]),
    ).toEqual(70);
  });
});
