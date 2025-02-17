---
title: Burn Damage
date: 2025-02-17T16:00:00-05:00
---

Recently I've been playing a lot of The Bazaar, and thinking about Burn.

Burn is a common form of damage over time in video games. We'll define it here as a number which stacks when applied, and on every tick it applies damage equal to the current stacks size, then reduces the stack by one.

### Damage from Burn

The first question on my mind: when I add a burn, how much damage does it do?

If we assume 5 stacks of burn, the damage would be 5 + 4 + 3 + 2 + 1 = 15. This type of operation is known as an arithmetic series. Using this formula, we can calculate the damage from burn for any number of stacks.

```json [LineChart]
{
  "title": "Damage from Burn",
  "xKey": "burn",
  "yKey": "damage",
  "xLabel": "Burn",
  "yLabel": "Damage",
  "data": [
    {
      "burn": 1,
      "damage": 1
    },
    {
      "burn": 2,
      "damage": 3
    },
    {
      "burn": 3,
      "damage": 6
    },
    {
      "burn": 4,
      "damage": 10
    },
    {
      "burn": 5,
      "damage": 15
    },
    {
      "burn": 6,
      "damage": 21
    },
    {
      "burn": 7,
      "damage": 28
    },
    {
      "burn": 8,
      "damage": 36
    },
    {
      "burn": 9,
      "damage": 45
    },
    {
      "burn": 10,
      "damage": 55
    },
    {
      "burn": 11,
      "damage": 66
    },
    {
      "burn": 12,
      "damage": 78
    },
    {
      "burn": 13,
      "damage": 91
    },
    {
      "burn": 14,
      "damage": 105
    },
    {
      "burn": 15,
      "damage": 120
    },
    {
      "burn": 16,
      "damage": 136
    },
    {
      "burn": 17,
      "damage": 153
    },
    {
      "burn": 18,
      "damage": 171
    },
    {
      "burn": 19,
      "damage": 190
    },
    {
      "burn": 20,
      "damage": 210
    },
    {
      "burn": 21,
      "damage": 231
    },
    {
      "burn": 22,
      "damage": 253
    },
    {
      "burn": 23,
      "damage": 276
    },
    {
      "burn": 24,
      "damage": 300
    },
    {
      "burn": 25,
      "damage": 325
    },
    {
      "burn": 26,
      "damage": 351
    },
    {
      "burn": 27,
      "damage": 378
    },
    {
      "burn": 28,
      "damage": 406
    },
    {
      "burn": 29,
      "damage": 435
    },
    {
      "burn": 30,
      "damage": 465
    },
    {
      "burn": 31,
      "damage": 496
    },
    {
      "burn": 32,
      "damage": 528
    },
    {
      "burn": 33,
      "damage": 561
    },
    {
      "burn": 34,
      "damage": 595
    },
    {
      "burn": 35,
      "damage": 630
    },
    {
      "burn": 36,
      "damage": 666
    },
    {
      "burn": 37,
      "damage": 703
    },
    {
      "burn": 38,
      "damage": 741
    },
    {
      "burn": 39,
      "damage": 780
    },
    {
      "burn": 40,
      "damage": 820
    },
    {
      "burn": 41,
      "damage": 861
    },
    {
      "burn": 42,
      "damage": 903
    },
    {
      "burn": 43,
      "damage": 946
    },
    {
      "burn": 44,
      "damage": 990
    },
    {
      "burn": 45,
      "damage": 1035
    },
    {
      "burn": 46,
      "damage": 1081
    },
    {
      "burn": 47,
      "damage": 1128
    },
    {
      "burn": 48,
      "damage": 1176
    },
    {
      "burn": 49,
      "damage": 1225
    },
    {
      "burn": 50,
      "damage": 1275
    },
    {
      "burn": 51,
      "damage": 1326
    },
    {
      "burn": 52,
      "damage": 1378
    },
    {
      "burn": 53,
      "damage": 1431
    },
    {
      "burn": 54,
      "damage": 1485
    },
    {
      "burn": 55,
      "damage": 1540
    },
    {
      "burn": 56,
      "damage": 1596
    },
    {
      "burn": 57,
      "damage": 1653
    },
    {
      "burn": 58,
      "damage": 1711
    },
    {
      "burn": 59,
      "damage": 1770
    },
    {
      "burn": 60,
      "damage": 1830
    },
    {
      "burn": 61,
      "damage": 1891
    },
    {
      "burn": 62,
      "damage": 1953
    },
    {
      "burn": 63,
      "damage": 2016
    },
    {
      "burn": 64,
      "damage": 2080
    },
    {
      "burn": 65,
      "damage": 2145
    },
    {
      "burn": 66,
      "damage": 2211
    },
    {
      "burn": 67,
      "damage": 2278
    },
    {
      "burn": 68,
      "damage": 2346
    },
    {
      "burn": 69,
      "damage": 2415
    },
    {
      "burn": 70,
      "damage": 2485
    },
    {
      "burn": 71,
      "damage": 2556
    },
    {
      "burn": 72,
      "damage": 2628
    },
    {
      "burn": 73,
      "damage": 2701
    },
    {
      "burn": 74,
      "damage": 2775
    },
    {
      "burn": 75,
      "damage": 2850
    },
    {
      "burn": 76,
      "damage": 2926
    },
    {
      "burn": 77,
      "damage": 3003
    },
    {
      "burn": 78,
      "damage": 3081
    },
    {
      "burn": 79,
      "damage": 3160
    },
    {
      "burn": 80,
      "damage": 3240
    },
    {
      "burn": 81,
      "damage": 3321
    },
    {
      "burn": 82,
      "damage": 3403
    },
    {
      "burn": 83,
      "damage": 3486
    },
    {
      "burn": 84,
      "damage": 3570
    },
    {
      "burn": 85,
      "damage": 3655
    },
    {
      "burn": 86,
      "damage": 3741
    },
    {
      "burn": 87,
      "damage": 3828
    },
    {
      "burn": 88,
      "damage": 3916
    },
    {
      "burn": 89,
      "damage": 4005
    },
    {
      "burn": 90,
      "damage": 4095
    },
    {
      "burn": 91,
      "damage": 4186
    },
    {
      "burn": 92,
      "damage": 4278
    },
    {
      "burn": 93,
      "damage": 4371
    },
    {
      "burn": 94,
      "damage": 4465
    },
    {
      "burn": 95,
      "damage": 4560
    },
    {
      "burn": 96,
      "damage": 4656
    },
    {
      "burn": 97,
      "damage": 4753
    },
    {
      "burn": 98,
      "damage": 4851
    },
    {
      "burn": 99,
      "damage": 4950
    },
    {
      "burn": 100,
      "damage": 5050
    }
  ]
}
```

Above we can see how damage scales super-linearly as we apply more burn.

This is helpful to know if you're only applying burn once, of if the burn ticks away between applications.

### Incremental Damage from New Burn

The whole point of burn is that it stacks, however. So let's take a look at new damage from additional burn applied over some existing amount of burn.

```json [LineChart]
{
  "title": "Incremental Damage from 1 Burn",
  "xKey": "currentBurn",
  "xLabel": "Current Burn",
  "yKey": "incrementalDamage",
  "yLabel": "New Damage",
  "data": [
    {
      "incrementalDamage": 1,
      "currentBurn": 1
    },
    {
      "incrementalDamage": 2,
      "currentBurn": 2
    },
    {
      "incrementalDamage": 3,
      "currentBurn": 3
    },
    {
      "incrementalDamage": 4,
      "currentBurn": 4
    },
    {
      "incrementalDamage": 5,
      "currentBurn": 5
    },
    {
      "incrementalDamage": 6,
      "currentBurn": 6
    },
    {
      "incrementalDamage": 7,
      "currentBurn": 7
    },
    {
      "incrementalDamage": 8,
      "currentBurn": 8
    },
    {
      "incrementalDamage": 9,
      "currentBurn": 9
    },
    {
      "incrementalDamage": 10,
      "currentBurn": 10
    },
    {
      "incrementalDamage": 11,
      "currentBurn": 11
    },
    {
      "incrementalDamage": 12,
      "currentBurn": 12
    },
    {
      "incrementalDamage": 13,
      "currentBurn": 13
    },
    {
      "incrementalDamage": 14,
      "currentBurn": 14
    },
    {
      "incrementalDamage": 15,
      "currentBurn": 15
    },
    {
      "incrementalDamage": 16,
      "currentBurn": 16
    },
    {
      "incrementalDamage": 17,
      "currentBurn": 17
    },
    {
      "incrementalDamage": 18,
      "currentBurn": 18
    },
    {
      "incrementalDamage": 19,
      "currentBurn": 19
    },
    {
      "incrementalDamage": 20,
      "currentBurn": 20
    },
    {
      "incrementalDamage": 21,
      "currentBurn": 21
    },
    {
      "incrementalDamage": 22,
      "currentBurn": 22
    },
    {
      "incrementalDamage": 23,
      "currentBurn": 23
    },
    {
      "incrementalDamage": 24,
      "currentBurn": 24
    },
    {
      "incrementalDamage": 25,
      "currentBurn": 25
    },
    {
      "incrementalDamage": 26,
      "currentBurn": 26
    },
    {
      "incrementalDamage": 27,
      "currentBurn": 27
    },
    {
      "incrementalDamage": 28,
      "currentBurn": 28
    },
    {
      "incrementalDamage": 29,
      "currentBurn": 29
    },
    {
      "incrementalDamage": 30,
      "currentBurn": 30
    },
    {
      "incrementalDamage": 31,
      "currentBurn": 31
    },
    {
      "incrementalDamage": 32,
      "currentBurn": 32
    },
    {
      "incrementalDamage": 33,
      "currentBurn": 33
    },
    {
      "incrementalDamage": 34,
      "currentBurn": 34
    },
    {
      "incrementalDamage": 35,
      "currentBurn": 35
    },
    {
      "incrementalDamage": 36,
      "currentBurn": 36
    },
    {
      "incrementalDamage": 37,
      "currentBurn": 37
    },
    {
      "incrementalDamage": 38,
      "currentBurn": 38
    },
    {
      "incrementalDamage": 39,
      "currentBurn": 39
    },
    {
      "incrementalDamage": 40,
      "currentBurn": 40
    },
    {
      "incrementalDamage": 41,
      "currentBurn": 41
    },
    {
      "incrementalDamage": 42,
      "currentBurn": 42
    },
    {
      "incrementalDamage": 43,
      "currentBurn": 43
    },
    {
      "incrementalDamage": 44,
      "currentBurn": 44
    },
    {
      "incrementalDamage": 45,
      "currentBurn": 45
    },
    {
      "incrementalDamage": 46,
      "currentBurn": 46
    },
    {
      "incrementalDamage": 47,
      "currentBurn": 47
    },
    {
      "incrementalDamage": 48,
      "currentBurn": 48
    },
    {
      "incrementalDamage": 49,
      "currentBurn": 49
    },
    {
      "incrementalDamage": 50,
      "currentBurn": 50
    },
    {
      "incrementalDamage": 51,
      "currentBurn": 51
    },
    {
      "incrementalDamage": 52,
      "currentBurn": 52
    },
    {
      "incrementalDamage": 53,
      "currentBurn": 53
    },
    {
      "incrementalDamage": 54,
      "currentBurn": 54
    },
    {
      "incrementalDamage": 55,
      "currentBurn": 55
    },
    {
      "incrementalDamage": 56,
      "currentBurn": 56
    },
    {
      "incrementalDamage": 57,
      "currentBurn": 57
    },
    {
      "incrementalDamage": 58,
      "currentBurn": 58
    },
    {
      "incrementalDamage": 59,
      "currentBurn": 59
    },
    {
      "incrementalDamage": 60,
      "currentBurn": 60
    },
    {
      "incrementalDamage": 61,
      "currentBurn": 61
    },
    {
      "incrementalDamage": 62,
      "currentBurn": 62
    },
    {
      "incrementalDamage": 63,
      "currentBurn": 63
    },
    {
      "incrementalDamage": 64,
      "currentBurn": 64
    },
    {
      "incrementalDamage": 65,
      "currentBurn": 65
    },
    {
      "incrementalDamage": 66,
      "currentBurn": 66
    },
    {
      "incrementalDamage": 67,
      "currentBurn": 67
    },
    {
      "incrementalDamage": 68,
      "currentBurn": 68
    },
    {
      "incrementalDamage": 69,
      "currentBurn": 69
    },
    {
      "incrementalDamage": 70,
      "currentBurn": 70
    },
    {
      "incrementalDamage": 71,
      "currentBurn": 71
    },
    {
      "incrementalDamage": 72,
      "currentBurn": 72
    },
    {
      "incrementalDamage": 73,
      "currentBurn": 73
    },
    {
      "incrementalDamage": 74,
      "currentBurn": 74
    },
    {
      "incrementalDamage": 75,
      "currentBurn": 75
    },
    {
      "incrementalDamage": 76,
      "currentBurn": 76
    },
    {
      "incrementalDamage": 77,
      "currentBurn": 77
    },
    {
      "incrementalDamage": 78,
      "currentBurn": 78
    },
    {
      "incrementalDamage": 79,
      "currentBurn": 79
    },
    {
      "incrementalDamage": 80,
      "currentBurn": 80
    },
    {
      "incrementalDamage": 81,
      "currentBurn": 81
    },
    {
      "incrementalDamage": 82,
      "currentBurn": 82
    },
    {
      "incrementalDamage": 83,
      "currentBurn": 83
    },
    {
      "incrementalDamage": 84,
      "currentBurn": 84
    },
    {
      "incrementalDamage": 85,
      "currentBurn": 85
    },
    {
      "incrementalDamage": 86,
      "currentBurn": 86
    },
    {
      "incrementalDamage": 87,
      "currentBurn": 87
    },
    {
      "incrementalDamage": 88,
      "currentBurn": 88
    },
    {
      "incrementalDamage": 89,
      "currentBurn": 89
    },
    {
      "incrementalDamage": 90,
      "currentBurn": 90
    },
    {
      "incrementalDamage": 91,
      "currentBurn": 91
    },
    {
      "incrementalDamage": 92,
      "currentBurn": 92
    },
    {
      "incrementalDamage": 93,
      "currentBurn": 93
    },
    {
      "incrementalDamage": 94,
      "currentBurn": 94
    },
    {
      "incrementalDamage": 95,
      "currentBurn": 95
    },
    {
      "incrementalDamage": 96,
      "currentBurn": 96
    },
    {
      "incrementalDamage": 97,
      "currentBurn": 97
    },
    {
      "incrementalDamage": 98,
      "currentBurn": 98
    },
    {
      "incrementalDamage": 99,
      "currentBurn": 99
    },
    {
      "incrementalDamage": 100,
      "currentBurn": 100
    }
  ]
}
```

Interestingly, the burn damage increases linearly, such that the damage from new burn is equal to current burn.

That's a very helpful heuristic for understanding burn damage!

### Burn Saturation

So far we've avoided thinking about Max HP. 100 Burn will deal 5,050 damage, but not if the enemy's Max HP is 1000!

Let's take a look at what happens to the incremental damage with a max of 1000.

```json [LineChart]
{
  "title": "Incremental Damage from 1 Burn (1000 Max HP)",
  "xKey": "currentBurn",
  "xLabel": "Current Burn",
  "yKey": "incrementalDamage",
  "yLabel": "New Damage",
  "data": [
    {
      "incrementalDamage": 1,
      "currentBurn": 1
    },
    {
      "incrementalDamage": 2,
      "currentBurn": 2
    },
    {
      "incrementalDamage": 3,
      "currentBurn": 3
    },
    {
      "incrementalDamage": 4,
      "currentBurn": 4
    },
    {
      "incrementalDamage": 5,
      "currentBurn": 5
    },
    {
      "incrementalDamage": 6,
      "currentBurn": 6
    },
    {
      "incrementalDamage": 7,
      "currentBurn": 7
    },
    {
      "incrementalDamage": 8,
      "currentBurn": 8
    },
    {
      "incrementalDamage": 9,
      "currentBurn": 9
    },
    {
      "incrementalDamage": 10,
      "currentBurn": 10
    },
    {
      "incrementalDamage": 11,
      "currentBurn": 11
    },
    {
      "incrementalDamage": 12,
      "currentBurn": 12
    },
    {
      "incrementalDamage": 13,
      "currentBurn": 13
    },
    {
      "incrementalDamage": 14,
      "currentBurn": 14
    },
    {
      "incrementalDamage": 15,
      "currentBurn": 15
    },
    {
      "incrementalDamage": 16,
      "currentBurn": 16
    },
    {
      "incrementalDamage": 17,
      "currentBurn": 17
    },
    {
      "incrementalDamage": 18,
      "currentBurn": 18
    },
    {
      "incrementalDamage": 19,
      "currentBurn": 19
    },
    {
      "incrementalDamage": 20,
      "currentBurn": 20
    },
    {
      "incrementalDamage": 21,
      "currentBurn": 21
    },
    {
      "incrementalDamage": 22,
      "currentBurn": 22
    },
    {
      "incrementalDamage": 23,
      "currentBurn": 23
    },
    {
      "incrementalDamage": 24,
      "currentBurn": 24
    },
    {
      "incrementalDamage": 25,
      "currentBurn": 25
    },
    {
      "incrementalDamage": 26,
      "currentBurn": 26
    },
    {
      "incrementalDamage": 27,
      "currentBurn": 27
    },
    {
      "incrementalDamage": 28,
      "currentBurn": 28
    },
    {
      "incrementalDamage": 29,
      "currentBurn": 29
    },
    {
      "incrementalDamage": 30,
      "currentBurn": 30
    },
    {
      "incrementalDamage": 31,
      "currentBurn": 31
    },
    {
      "incrementalDamage": 32,
      "currentBurn": 32
    },
    {
      "incrementalDamage": 33,
      "currentBurn": 33
    },
    {
      "incrementalDamage": 34,
      "currentBurn": 34
    },
    {
      "incrementalDamage": 35,
      "currentBurn": 35
    },
    {
      "incrementalDamage": 36,
      "currentBurn": 36
    },
    {
      "incrementalDamage": 37,
      "currentBurn": 37
    },
    {
      "incrementalDamage": 38,
      "currentBurn": 38
    },
    {
      "incrementalDamage": 39,
      "currentBurn": 39
    },
    {
      "incrementalDamage": 40,
      "currentBurn": 40
    },
    {
      "incrementalDamage": 41,
      "currentBurn": 41
    },
    {
      "incrementalDamage": 42,
      "currentBurn": 42
    },
    {
      "incrementalDamage": 43,
      "currentBurn": 43
    },
    {
      "incrementalDamage": 44,
      "currentBurn": 44
    },
    {
      "incrementalDamage": 10,
      "currentBurn": 45
    },
    {
      "incrementalDamage": 0,
      "currentBurn": 46
    },
    {
      "incrementalDamage": 0,
      "currentBurn": 47
    },
    {
      "incrementalDamage": 0,
      "currentBurn": 48
    },
    {
      "incrementalDamage": 0,
      "currentBurn": 49
    },
    {
      "incrementalDamage": 0,
      "currentBurn": 50
    },
    {
      "incrementalDamage": 0,
      "currentBurn": 51
    },
    {
      "incrementalDamage": 0,
      "currentBurn": 52
    },
    {
      "incrementalDamage": 0,
      "currentBurn": 53
    },
    {
      "incrementalDamage": 0,
      "currentBurn": 54
    },
    {
      "incrementalDamage": 0,
      "currentBurn": 55
    },
    {
      "incrementalDamage": 0,
      "currentBurn": 56
    },
    {
      "incrementalDamage": 0,
      "currentBurn": 57
    },
    {
      "incrementalDamage": 0,
      "currentBurn": 58
    },
    {
      "incrementalDamage": 0,
      "currentBurn": 59
    },
    {
      "incrementalDamage": 0,
      "currentBurn": 60
    },
    {
      "incrementalDamage": 0,
      "currentBurn": 61
    },
    {
      "incrementalDamage": 0,
      "currentBurn": 62
    },
    {
      "incrementalDamage": 0,
      "currentBurn": 63
    },
    {
      "incrementalDamage": 0,
      "currentBurn": 64
    },
    {
      "incrementalDamage": 0,
      "currentBurn": 65
    },
    {
      "incrementalDamage": 0,
      "currentBurn": 66
    },
    {
      "incrementalDamage": 0,
      "currentBurn": 67
    },
    {
      "incrementalDamage": 0,
      "currentBurn": 68
    },
    {
      "incrementalDamage": 0,
      "currentBurn": 69
    },
    {
      "incrementalDamage": 0,
      "currentBurn": 70
    },
    {
      "incrementalDamage": 0,
      "currentBurn": 71
    },
    {
      "incrementalDamage": 0,
      "currentBurn": 72
    },
    {
      "incrementalDamage": 0,
      "currentBurn": 73
    },
    {
      "incrementalDamage": 0,
      "currentBurn": 74
    },
    {
      "incrementalDamage": 0,
      "currentBurn": 75
    },
    {
      "incrementalDamage": 0,
      "currentBurn": 76
    },
    {
      "incrementalDamage": 0,
      "currentBurn": 77
    },
    {
      "incrementalDamage": 0,
      "currentBurn": 78
    },
    {
      "incrementalDamage": 0,
      "currentBurn": 79
    },
    {
      "incrementalDamage": 0,
      "currentBurn": 80
    },
    {
      "incrementalDamage": 0,
      "currentBurn": 81
    },
    {
      "incrementalDamage": 0,
      "currentBurn": 82
    },
    {
      "incrementalDamage": 0,
      "currentBurn": 83
    },
    {
      "incrementalDamage": 0,
      "currentBurn": 84
    },
    {
      "incrementalDamage": 0,
      "currentBurn": 85
    },
    {
      "incrementalDamage": 0,
      "currentBurn": 86
    },
    {
      "incrementalDamage": 0,
      "currentBurn": 87
    },
    {
      "incrementalDamage": 0,
      "currentBurn": 88
    },
    {
      "incrementalDamage": 0,
      "currentBurn": 89
    },
    {
      "incrementalDamage": 0,
      "currentBurn": 90
    },
    {
      "incrementalDamage": 0,
      "currentBurn": 91
    },
    {
      "incrementalDamage": 0,
      "currentBurn": 92
    },
    {
      "incrementalDamage": 0,
      "currentBurn": 93
    },
    {
      "incrementalDamage": 0,
      "currentBurn": 94
    },
    {
      "incrementalDamage": 0,
      "currentBurn": 95
    },
    {
      "incrementalDamage": 0,
      "currentBurn": 96
    },
    {
      "incrementalDamage": 0,
      "currentBurn": 97
    },
    {
      "incrementalDamage": 0,
      "currentBurn": 98
    },
    {
      "incrementalDamage": 0,
      "currentBurn": 99
    },
    {
      "incrementalDamage": 0,
      "currentBurn": 100
    }
  ]
}
```

As you can see above, the damage drops to 0 once you hit a saturation point. This means that the burn damage will not increase further even if you apply more burn.

```json [LineChart]
{
  "title": "Burn Saturation vs Max HP",
  "xKey": "maxHp",
  "xLabel": "Max HP",
  "yKey": "burnSaturation",
  "yLabel": "Burn Saturation",
  "data": [
    {
      "maxHp": 50,
      "burnSaturation": 9
    },
    {
      "maxHp": 100,
      "burnSaturation": 13
    },
    {
      "maxHp": 150,
      "burnSaturation": 16
    },
    {
      "maxHp": 200,
      "burnSaturation": 19
    },
    {
      "maxHp": 250,
      "burnSaturation": 21
    },
    {
      "maxHp": 300,
      "burnSaturation": 24
    },
    {
      "maxHp": 350,
      "burnSaturation": 25
    },
    {
      "maxHp": 400,
      "burnSaturation": 27
    },
    {
      "maxHp": 450,
      "burnSaturation": 29
    },
    {
      "maxHp": 500,
      "burnSaturation": 31
    },
    {
      "maxHp": 550,
      "burnSaturation": 32
    },
    {
      "maxHp": 600,
      "burnSaturation": 34
    },
    {
      "maxHp": 650,
      "burnSaturation": 35
    },
    {
      "maxHp": 700,
      "burnSaturation": 36
    },
    {
      "maxHp": 750,
      "burnSaturation": 38
    },
    {
      "maxHp": 800,
      "burnSaturation": 39
    },
    {
      "maxHp": 850,
      "burnSaturation": 40
    },
    {
      "maxHp": 900,
      "burnSaturation": 41
    },
    {
      "maxHp": 950,
      "burnSaturation": 43
    },
    {
      "maxHp": 1000,
      "burnSaturation": 44
    },
    {
      "maxHp": 1050,
      "burnSaturation": 45
    },
    {
      "maxHp": 1100,
      "burnSaturation": 46
    },
    {
      "maxHp": 1150,
      "burnSaturation": 47
    },
    {
      "maxHp": 1200,
      "burnSaturation": 48
    },
    {
      "maxHp": 1250,
      "burnSaturation": 49
    },
    {
      "maxHp": 1300,
      "burnSaturation": 50
    },
    {
      "maxHp": 1350,
      "burnSaturation": 51
    },
    {
      "maxHp": 1400,
      "burnSaturation": 52
    },
    {
      "maxHp": 1450,
      "burnSaturation": 53
    },
    {
      "maxHp": 1500,
      "burnSaturation": 54
    },
    {
      "maxHp": 1550,
      "burnSaturation": 55
    },
    {
      "maxHp": 1600,
      "burnSaturation": 56
    },
    {
      "maxHp": 1650,
      "burnSaturation": 56
    },
    {
      "maxHp": 1700,
      "burnSaturation": 57
    },
    {
      "maxHp": 1750,
      "burnSaturation": 58
    },
    {
      "maxHp": 1800,
      "burnSaturation": 59
    },
    {
      "maxHp": 1850,
      "burnSaturation": 60
    },
    {
      "maxHp": 1900,
      "burnSaturation": 61
    },
    {
      "maxHp": 1950,
      "burnSaturation": 61
    },
    {
      "maxHp": 2000,
      "burnSaturation": 62
    },
    {
      "maxHp": 2050,
      "burnSaturation": 63
    },
    {
      "maxHp": 2100,
      "burnSaturation": 64
    },
    {
      "maxHp": 2150,
      "burnSaturation": 65
    },
    {
      "maxHp": 2200,
      "burnSaturation": 65
    },
    {
      "maxHp": 2250,
      "burnSaturation": 66
    },
    {
      "maxHp": 2300,
      "burnSaturation": 67
    },
    {
      "maxHp": 2350,
      "burnSaturation": 68
    },
    {
      "maxHp": 2400,
      "burnSaturation": 68
    },
    {
      "maxHp": 2450,
      "burnSaturation": 69
    },
    {
      "maxHp": 2500,
      "burnSaturation": 70
    },
    {
      "maxHp": 2550,
      "burnSaturation": 70
    },
    {
      "maxHp": 2600,
      "burnSaturation": 71
    },
    {
      "maxHp": 2650,
      "burnSaturation": 72
    },
    {
      "maxHp": 2700,
      "burnSaturation": 72
    },
    {
      "maxHp": 2750,
      "burnSaturation": 73
    },
    {
      "maxHp": 2800,
      "burnSaturation": 74
    },
    {
      "maxHp": 2850,
      "burnSaturation": 75
    },
    {
      "maxHp": 2900,
      "burnSaturation": 75
    },
    {
      "maxHp": 2950,
      "burnSaturation": 76
    },
    {
      "maxHp": 3000,
      "burnSaturation": 76
    },
    {
      "maxHp": 3050,
      "burnSaturation": 77
    },
    {
      "maxHp": 3100,
      "burnSaturation": 78
    },
    {
      "maxHp": 3150,
      "burnSaturation": 78
    },
    {
      "maxHp": 3200,
      "burnSaturation": 79
    },
    {
      "maxHp": 3250,
      "burnSaturation": 80
    },
    {
      "maxHp": 3300,
      "burnSaturation": 80
    },
    {
      "maxHp": 3350,
      "burnSaturation": 81
    },
    {
      "maxHp": 3400,
      "burnSaturation": 81
    },
    {
      "maxHp": 3450,
      "burnSaturation": 82
    },
    {
      "maxHp": 3500,
      "burnSaturation": 83
    },
    {
      "maxHp": 3550,
      "burnSaturation": 83
    },
    {
      "maxHp": 3600,
      "burnSaturation": 84
    },
    {
      "maxHp": 3650,
      "burnSaturation": 84
    },
    {
      "maxHp": 3700,
      "burnSaturation": 85
    },
    {
      "maxHp": 3750,
      "burnSaturation": 86
    },
    {
      "maxHp": 3800,
      "burnSaturation": 86
    },
    {
      "maxHp": 3850,
      "burnSaturation": 87
    },
    {
      "maxHp": 3900,
      "burnSaturation": 87
    },
    {
      "maxHp": 3950,
      "burnSaturation": 88
    },
    {
      "maxHp": 4000,
      "burnSaturation": 88
    },
    {
      "maxHp": 4050,
      "burnSaturation": 89
    },
    {
      "maxHp": 4100,
      "burnSaturation": 90
    },
    {
      "maxHp": 4150,
      "burnSaturation": 90
    },
    {
      "maxHp": 4200,
      "burnSaturation": 91
    },
    {
      "maxHp": 4250,
      "burnSaturation": 91
    },
    {
      "maxHp": 4300,
      "burnSaturation": 92
    },
    {
      "maxHp": 4350,
      "burnSaturation": 92
    },
    {
      "maxHp": 4400,
      "burnSaturation": 93
    },
    {
      "maxHp": 4450,
      "burnSaturation": 93
    },
    {
      "maxHp": 4500,
      "burnSaturation": 94
    },
    {
      "maxHp": 4550,
      "burnSaturation": 94
    },
    {
      "maxHp": 4600,
      "burnSaturation": 95
    },
    {
      "maxHp": 4650,
      "burnSaturation": 95
    },
    {
      "maxHp": 4700,
      "burnSaturation": 96
    },
    {
      "maxHp": 4750,
      "burnSaturation": 96
    },
    {
      "maxHp": 4800,
      "burnSaturation": 97
    },
    {
      "maxHp": 4850,
      "burnSaturation": 97
    },
    {
      "maxHp": 4900,
      "burnSaturation": 98
    },
    {
      "maxHp": 4950,
      "burnSaturation": 99
    },
    {
      "maxHp": 5000,
      "burnSaturation": 99
    },
    {
      "maxHp": 5050,
      "burnSaturation": 100
    },
    {
      "maxHp": 5100,
      "burnSaturation": 100
    },
    {
      "maxHp": 5150,
      "burnSaturation": 100
    },
    {
      "maxHp": 5200,
      "burnSaturation": 101
    },
    {
      "maxHp": 5250,
      "burnSaturation": 101
    },
    {
      "maxHp": 5300,
      "burnSaturation": 102
    },
    {
      "maxHp": 5350,
      "burnSaturation": 102
    },
    {
      "maxHp": 5400,
      "burnSaturation": 103
    },
    {
      "maxHp": 5450,
      "burnSaturation": 103
    },
    {
      "maxHp": 5500,
      "burnSaturation": 104
    },
    {
      "maxHp": 5550,
      "burnSaturation": 104
    },
    {
      "maxHp": 5600,
      "burnSaturation": 105
    },
    {
      "maxHp": 5650,
      "burnSaturation": 105
    },
    {
      "maxHp": 5700,
      "burnSaturation": 106
    },
    {
      "maxHp": 5750,
      "burnSaturation": 106
    },
    {
      "maxHp": 5800,
      "burnSaturation": 107
    },
    {
      "maxHp": 5850,
      "burnSaturation": 107
    },
    {
      "maxHp": 5900,
      "burnSaturation": 108
    },
    {
      "maxHp": 5950,
      "burnSaturation": 108
    },
    {
      "maxHp": 6000,
      "burnSaturation": 109
    },
    {
      "maxHp": 6050,
      "burnSaturation": 109
    },
    {
      "maxHp": 6100,
      "burnSaturation": 109
    },
    {
      "maxHp": 6150,
      "burnSaturation": 110
    },
    {
      "maxHp": 6200,
      "burnSaturation": 110
    },
    {
      "maxHp": 6250,
      "burnSaturation": 111
    },
    {
      "maxHp": 6300,
      "burnSaturation": 111
    },
    {
      "maxHp": 6350,
      "burnSaturation": 112
    },
    {
      "maxHp": 6400,
      "burnSaturation": 112
    },
    {
      "maxHp": 6450,
      "burnSaturation": 113
    },
    {
      "maxHp": 6500,
      "burnSaturation": 113
    },
    {
      "maxHp": 6550,
      "burnSaturation": 113
    },
    {
      "maxHp": 6600,
      "burnSaturation": 114
    },
    {
      "maxHp": 6650,
      "burnSaturation": 114
    },
    {
      "maxHp": 6700,
      "burnSaturation": 115
    },
    {
      "maxHp": 6750,
      "burnSaturation": 115
    },
    {
      "maxHp": 6800,
      "burnSaturation": 116
    },
    {
      "maxHp": 6850,
      "burnSaturation": 116
    },
    {
      "maxHp": 6900,
      "burnSaturation": 116
    },
    {
      "maxHp": 6950,
      "burnSaturation": 117
    },
    {
      "maxHp": 7000,
      "burnSaturation": 117
    },
    {
      "maxHp": 7050,
      "burnSaturation": 118
    },
    {
      "maxHp": 7100,
      "burnSaturation": 118
    },
    {
      "maxHp": 7150,
      "burnSaturation": 119
    },
    {
      "maxHp": 7200,
      "burnSaturation": 119
    },
    {
      "maxHp": 7250,
      "burnSaturation": 119
    },
    {
      "maxHp": 7300,
      "burnSaturation": 120
    },
    {
      "maxHp": 7350,
      "burnSaturation": 120
    },
    {
      "maxHp": 7400,
      "burnSaturation": 121
    },
    {
      "maxHp": 7450,
      "burnSaturation": 121
    },
    {
      "maxHp": 7500,
      "burnSaturation": 121
    },
    {
      "maxHp": 7550,
      "burnSaturation": 122
    },
    {
      "maxHp": 7600,
      "burnSaturation": 122
    },
    {
      "maxHp": 7650,
      "burnSaturation": 123
    },
    {
      "maxHp": 7700,
      "burnSaturation": 123
    },
    {
      "maxHp": 7750,
      "burnSaturation": 124
    },
    {
      "maxHp": 7800,
      "burnSaturation": 124
    },
    {
      "maxHp": 7850,
      "burnSaturation": 124
    },
    {
      "maxHp": 7900,
      "burnSaturation": 125
    },
    {
      "maxHp": 7950,
      "burnSaturation": 125
    },
    {
      "maxHp": 8000,
      "burnSaturation": 125
    },
    {
      "maxHp": 8050,
      "burnSaturation": 126
    },
    {
      "maxHp": 8100,
      "burnSaturation": 126
    },
    {
      "maxHp": 8150,
      "burnSaturation": 127
    },
    {
      "maxHp": 8200,
      "burnSaturation": 127
    },
    {
      "maxHp": 8250,
      "burnSaturation": 127
    },
    {
      "maxHp": 8300,
      "burnSaturation": 128
    },
    {
      "maxHp": 8350,
      "burnSaturation": 128
    },
    {
      "maxHp": 8400,
      "burnSaturation": 129
    },
    {
      "maxHp": 8450,
      "burnSaturation": 129
    },
    {
      "maxHp": 8500,
      "burnSaturation": 129
    },
    {
      "maxHp": 8550,
      "burnSaturation": 130
    },
    {
      "maxHp": 8600,
      "burnSaturation": 130
    },
    {
      "maxHp": 8650,
      "burnSaturation": 131
    },
    {
      "maxHp": 8700,
      "burnSaturation": 131
    },
    {
      "maxHp": 8750,
      "burnSaturation": 131
    },
    {
      "maxHp": 8800,
      "burnSaturation": 132
    },
    {
      "maxHp": 8850,
      "burnSaturation": 132
    },
    {
      "maxHp": 8900,
      "burnSaturation": 132
    },
    {
      "maxHp": 8950,
      "burnSaturation": 133
    },
    {
      "maxHp": 9000,
      "burnSaturation": 133
    },
    {
      "maxHp": 9050,
      "burnSaturation": 134
    },
    {
      "maxHp": 9100,
      "burnSaturation": 134
    },
    {
      "maxHp": 9150,
      "burnSaturation": 134
    },
    {
      "maxHp": 9200,
      "burnSaturation": 135
    },
    {
      "maxHp": 9250,
      "burnSaturation": 135
    },
    {
      "maxHp": 9300,
      "burnSaturation": 135
    },
    {
      "maxHp": 9350,
      "burnSaturation": 136
    },
    {
      "maxHp": 9400,
      "burnSaturation": 136
    },
    {
      "maxHp": 9450,
      "burnSaturation": 136
    },
    {
      "maxHp": 9500,
      "burnSaturation": 137
    },
    {
      "maxHp": 9550,
      "burnSaturation": 137
    },
    {
      "maxHp": 9600,
      "burnSaturation": 138
    },
    {
      "maxHp": 9650,
      "burnSaturation": 138
    },
    {
      "maxHp": 9700,
      "burnSaturation": 138
    },
    {
      "maxHp": 9750,
      "burnSaturation": 139
    },
    {
      "maxHp": 9800,
      "burnSaturation": 139
    },
    {
      "maxHp": 9850,
      "burnSaturation": 139
    },
    {
      "maxHp": 9900,
      "burnSaturation": 140
    },
    {
      "maxHp": 9950,
      "burnSaturation": 140
    },
    {
      "maxHp": 10000,
      "burnSaturation": 140
    }
  ]
}
```

Here I've plotted burn saturation vs max HP, so you can see the relationship between the two.

### Beyond Saturation

Thinking in terms of burn saturation has a significant limitation: it doesn't account for the fact faster is better.

Once we've reached the saturation point, incremental burn will speed up the time to kill the enemy.

```json [LineChart]
{
  "title": "Time to Lethal (1000 Max HP)",
  "xKey": "burn",
  "xLabel": "Burn",
  "yKey": "survivalTime",
  "yLabel": "Survival Time (Burn Ticks)",
  "data": [
    {
      "survivalTime": null,
      "burn": 1
    },
    {
      "survivalTime": null,
      "burn": 2
    },
    {
      "survivalTime": null,
      "burn": 3
    },
    {
      "survivalTime": null,
      "burn": 4
    },
    {
      "survivalTime": null,
      "burn": 5
    },
    {
      "survivalTime": null,
      "burn": 6
    },
    {
      "survivalTime": null,
      "burn": 7
    },
    {
      "survivalTime": null,
      "burn": 8
    },
    {
      "survivalTime": null,
      "burn": 9
    },
    {
      "survivalTime": null,
      "burn": 10
    },
    {
      "survivalTime": null,
      "burn": 11
    },
    {
      "survivalTime": null,
      "burn": 12
    },
    {
      "survivalTime": null,
      "burn": 13
    },
    {
      "survivalTime": null,
      "burn": 14
    },
    {
      "survivalTime": null,
      "burn": 15
    },
    {
      "survivalTime": null,
      "burn": 16
    },
    {
      "survivalTime": null,
      "burn": 17
    },
    {
      "survivalTime": null,
      "burn": 18
    },
    {
      "survivalTime": null,
      "burn": 19
    },
    {
      "survivalTime": null,
      "burn": 20
    },
    {
      "survivalTime": null,
      "burn": 21
    },
    {
      "survivalTime": null,
      "burn": 22
    },
    {
      "survivalTime": null,
      "burn": 23
    },
    {
      "survivalTime": null,
      "burn": 24
    },
    {
      "survivalTime": null,
      "burn": 25
    },
    {
      "survivalTime": null,
      "burn": 26
    },
    {
      "survivalTime": null,
      "burn": 27
    },
    {
      "survivalTime": null,
      "burn": 28
    },
    {
      "survivalTime": null,
      "burn": 29
    },
    {
      "survivalTime": null,
      "burn": 30
    },
    {
      "survivalTime": null,
      "burn": 31
    },
    {
      "survivalTime": null,
      "burn": 32
    },
    {
      "survivalTime": null,
      "burn": 33
    },
    {
      "survivalTime": null,
      "burn": 34
    },
    {
      "survivalTime": null,
      "burn": 35
    },
    {
      "survivalTime": null,
      "burn": 36
    },
    {
      "survivalTime": null,
      "burn": 37
    },
    {
      "survivalTime": null,
      "burn": 38
    },
    {
      "survivalTime": null,
      "burn": 39
    },
    {
      "survivalTime": null,
      "burn": 40
    },
    {
      "survivalTime": null,
      "burn": 41
    },
    {
      "survivalTime": null,
      "burn": 42
    },
    {
      "survivalTime": null,
      "burn": 43
    },
    {
      "survivalTime": null,
      "burn": 44
    },
    {
      "survivalTime": 38,
      "burn": 45
    },
    {
      "survivalTime": 34,
      "burn": 46
    },
    {
      "survivalTime": 32,
      "burn": 47
    },
    {
      "survivalTime": 30,
      "burn": 48
    },
    {
      "survivalTime": 29,
      "burn": 49
    },
    {
      "survivalTime": 28,
      "burn": 50
    },
    {
      "survivalTime": 26,
      "burn": 51
    },
    {
      "survivalTime": 25,
      "burn": 52
    },
    {
      "survivalTime": 25,
      "burn": 53
    },
    {
      "survivalTime": 24,
      "burn": 54
    },
    {
      "survivalTime": 23,
      "burn": 55
    },
    {
      "survivalTime": 22,
      "burn": 56
    },
    {
      "survivalTime": 22,
      "burn": 57
    },
    {
      "survivalTime": 21,
      "burn": 58
    },
    {
      "survivalTime": 21,
      "burn": 59
    },
    {
      "survivalTime": 20,
      "burn": 60
    },
    {
      "survivalTime": 20,
      "burn": 61
    },
    {
      "survivalTime": 19,
      "burn": 62
    },
    {
      "survivalTime": 19,
      "burn": 63
    },
    {
      "survivalTime": 19,
      "burn": 64
    },
    {
      "survivalTime": 18,
      "burn": 65
    },
    {
      "survivalTime": 18,
      "burn": 66
    },
    {
      "survivalTime": 17,
      "burn": 67
    },
    {
      "survivalTime": 17,
      "burn": 68
    },
    {
      "survivalTime": 17,
      "burn": 69
    },
    {
      "survivalTime": 16,
      "burn": 70
    },
    {
      "survivalTime": 16,
      "burn": 71
    },
    {
      "survivalTime": 16,
      "burn": 72
    },
    {
      "survivalTime": 16,
      "burn": 73
    },
    {
      "survivalTime": 15,
      "burn": 74
    },
    {
      "survivalTime": 15,
      "burn": 75
    },
    {
      "survivalTime": 15,
      "burn": 76
    },
    {
      "survivalTime": 15,
      "burn": 77
    },
    {
      "survivalTime": 14,
      "burn": 78
    },
    {
      "survivalTime": 14,
      "burn": 79
    },
    {
      "survivalTime": 14,
      "burn": 80
    },
    {
      "survivalTime": 14,
      "burn": 81
    },
    {
      "survivalTime": 14,
      "burn": 82
    },
    {
      "survivalTime": 13,
      "burn": 83
    },
    {
      "survivalTime": 13,
      "burn": 84
    },
    {
      "survivalTime": 13,
      "burn": 85
    },
    {
      "survivalTime": 13,
      "burn": 86
    },
    {
      "survivalTime": 13,
      "burn": 87
    },
    {
      "survivalTime": 13,
      "burn": 88
    },
    {
      "survivalTime": 12,
      "burn": 89
    },
    {
      "survivalTime": 12,
      "burn": 90
    },
    {
      "survivalTime": 12,
      "burn": 91
    },
    {
      "survivalTime": 12,
      "burn": 92
    },
    {
      "survivalTime": 12,
      "burn": 93
    },
    {
      "survivalTime": 12,
      "burn": 94
    },
    {
      "survivalTime": 12,
      "burn": 95
    },
    {
      "survivalTime": 11,
      "burn": 96
    },
    {
      "survivalTime": 11,
      "burn": 97
    },
    {
      "survivalTime": 11,
      "burn": 98
    },
    {
      "survivalTime": 11,
      "burn": 99
    },
    {
      "survivalTime": 11,
      "burn": 100
    },
    {
      "survivalTime": 11,
      "burn": 101
    },
    {
      "survivalTime": 11,
      "burn": 102
    },
    {
      "survivalTime": 11,
      "burn": 103
    },
    {
      "survivalTime": 11,
      "burn": 104
    },
    {
      "survivalTime": 10,
      "burn": 105
    },
    {
      "survivalTime": 10,
      "burn": 106
    },
    {
      "survivalTime": 10,
      "burn": 107
    },
    {
      "survivalTime": 10,
      "burn": 108
    },
    {
      "survivalTime": 10,
      "burn": 109
    },
    {
      "survivalTime": 10,
      "burn": 110
    },
    {
      "survivalTime": 10,
      "burn": 111
    },
    {
      "survivalTime": 10,
      "burn": 112
    },
    {
      "survivalTime": 10,
      "burn": 113
    },
    {
      "survivalTime": 10,
      "burn": 114
    },
    {
      "survivalTime": 10,
      "burn": 115
    },
    {
      "survivalTime": 9,
      "burn": 116
    },
    {
      "survivalTime": 9,
      "burn": 117
    },
    {
      "survivalTime": 9,
      "burn": 118
    },
    {
      "survivalTime": 9,
      "burn": 119
    },
    {
      "survivalTime": 9,
      "burn": 120
    },
    {
      "survivalTime": 9,
      "burn": 121
    },
    {
      "survivalTime": 9,
      "burn": 122
    },
    {
      "survivalTime": 9,
      "burn": 123
    },
    {
      "survivalTime": 9,
      "burn": 124
    },
    {
      "survivalTime": 9,
      "burn": 125
    },
    {
      "survivalTime": 9,
      "burn": 126
    },
    {
      "survivalTime": 9,
      "burn": 127
    },
    {
      "survivalTime": 9,
      "burn": 128
    },
    {
      "survivalTime": 8,
      "burn": 129
    },
    {
      "survivalTime": 8,
      "burn": 130
    },
    {
      "survivalTime": 8,
      "burn": 131
    },
    {
      "survivalTime": 8,
      "burn": 132
    },
    {
      "survivalTime": 8,
      "burn": 133
    },
    {
      "survivalTime": 8,
      "burn": 134
    },
    {
      "survivalTime": 8,
      "burn": 135
    },
    {
      "survivalTime": 8,
      "burn": 136
    },
    {
      "survivalTime": 8,
      "burn": 137
    },
    {
      "survivalTime": 8,
      "burn": 138
    },
    {
      "survivalTime": 8,
      "burn": 139
    },
    {
      "survivalTime": 8,
      "burn": 140
    },
    {
      "survivalTime": 8,
      "burn": 141
    },
    {
      "survivalTime": 8,
      "burn": 142
    },
    {
      "survivalTime": 8,
      "burn": 143
    },
    {
      "survivalTime": 8,
      "burn": 144
    },
    {
      "survivalTime": 8,
      "burn": 145
    },
    {
      "survivalTime": 7,
      "burn": 146
    },
    {
      "survivalTime": 7,
      "burn": 147
    },
    {
      "survivalTime": 7,
      "burn": 148
    },
    {
      "survivalTime": 7,
      "burn": 149
    },
    {
      "survivalTime": 7,
      "burn": 150
    }
  ]
}
```

As you can see, the survival time drops off quite quickly as you pass the saturation point, and flattens out after that.

### Conclusions

- Low burn is low damage, but burn damage increases super-linearly.
- Burn applied late in the fight is much less impactful than burn applied early in the fight.
- Reaching the saturation point is important, and going beyond is very valuable initially, but falls off.
- This means burst is crucial for maximizing burn damage.

Hopefully this gave you some additional insights into burn!
