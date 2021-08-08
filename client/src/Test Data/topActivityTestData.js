// Testing Purposes
//activityById returns an object, listAllActivities returns an array;

//Server sends three get requests for data pertaining to topSwim, topRun, topRide respectively.
// Server sorts all activities and then finds the first, swim, run, and ride activities;
// Server would put (Swim, Run, Ride Activities into an array and then concat that array into the totalActiities [[totalActivities], [{topSwim}, {topRun}, {topRide}]]);
//Client would simply read results[0[1]]
//Client then sets state for all three topActivities. topActivities = [{topSwim}, {topRun}, {topRide}], using callback
// Top Activity Props
//Entry Component includes 'expandable' div for #entry1, that is based on the state of topActivities[0], topActivities[1], topActivities[2] respectively;
//Entry Component shows top results for 'all results' in each sport category only
const topActivities = [{
  "resource_state": 3,
  "athlete": {
      "id": 19812306,
      "resource_state": 1
  },
  "name": "MySwimPro - Morning Workout",
  "distance": 2537.5,
  "moving_time": 2230,
  "elapsed_time": 4003,
  "total_elevation_gain": 0,
  "type": "Swim",
  "id": 2425659209,
  "external_id": "strava.fit",
  "upload_id": 2578365468,
  "start_date": "2019-06-05T13:02:00Z",
  "start_date_local": "2019-06-05T07:02:00Z",
  "timezone": "(GMT-07:00) America/Denver",
  "utc_offset": -21600.0,
  "start_latlng": null,
  "end_latlng": null,
  "location_city": null,
  "location_state": null,
  "location_country": null,
  "start_latitude": null,
  "start_longitude": null,
  "achievement_count": 0,
  "kudos_count": 2,
  "comment_count": 0,
  "athlete_count": 1,
  "photo_count": 0,
  "map": {
      "id": "a2425659209",
      "polyline": "",
      "resource_state": 3
  },
  "trainer": true,
  "commute": false,
  "manual": false,
  "private": false,
  "visibility": "everyone",
  "flagged": false,
  "gear_id": null,
  "from_accepted_tag": false,
  "upload_id_str": "2578365468",
  "average_speed": 1.138,
  "max_speed": 2.3,
  "has_heartrate": true,
  "average_heartrate": 143.6,
  "max_heartrate": 180.0,
  "heartrate_opt_out": false,
  "display_hide_heartrate_option": true,
  "pr_count": 0,
  "total_photo_count": 1,
  "has_kudoed": false,
  "suffer_score": 154.0,
  "description": "1 × 275 Free @ 4:21\n1 × 125 Free @ 2:27\n1 × 100 Free @ 4:07\n1 × 100 Stroke @ 2:18\n1 × 50 Free @ 1:03\n1 × 100 Stroke @ 3:29\n1 × 25 Free @ 0:48\n1 × 100 Free @ 1:35\n1 × 150 Free @ 2:34\n1 × 200 Free @ 3:21\n1 × 200 Free @ 2:57\n1 × 150 Free @ 2:15\n1 × 100 Free @ 1:29\n1 × 50 Free @ 2:27\n1 × 100 Free @ 1:51\n1 × 325 Stroke @ 5:49\n1 × 275 Stroke @ 3:52\n1 × 275 Stroke @ 10:16\n1 × 25 Free @ 0:57\n1 × 25 Free @ 2:17\n1 × 25 Breast @ 0:12\n\n",
  "calories": 641.0,
  "perceived_exertion": null,
  "prefer_perceived_exertion": null,
  "segment_efforts": [],
  "splits_metric": [
      {
          "distance": 1002.0,
          "elapsed_time": 2102,
          "elevation_difference": null,
          "moving_time": 2102,
          "split": 1,
          "average_speed": 0.48,
          "average_grade_adjusted_speed": null,
          "average_heartrate": 134.73549000951473,
          "pace_zone": 0
      },
      {
          "distance": 998.3,
          "elapsed_time": 1906,
          "elevation_difference": null,
          "moving_time": 1906,
          "split": 2,
          "average_speed": 0.52,
          "average_grade_adjusted_speed": null,
          "average_heartrate": 153.8420776495278,
          "pace_zone": 0
      },
      {
          "distance": 537.2,
          "elapsed_time": 1783,
          "elevation_difference": null,
          "moving_time": 1783,
          "split": 3,
          "average_speed": 0.3,
          "average_grade_adjusted_speed": null,
          "average_heartrate": 143.0695457094784,
          "pace_zone": 0
      }
  ],
  "splits_standard": [
      {
          "distance": 1611.6,
          "elapsed_time": 3235,
          "elevation_difference": null,
          "moving_time": 3235,
          "split": 1,
          "average_speed": 0.5,
          "average_grade_adjusted_speed": null,
          "average_heartrate": 140.19598145285934,
          "pace_zone": 0
      },
      {
          "distance": 925.9,
          "elapsed_time": 2556,
          "elevation_difference": null,
          "moving_time": 2556,
          "split": 2,
          "average_speed": 0.36,
          "average_grade_adjusted_speed": null,
          "average_heartrate": 147.88575899843505,
          "pace_zone": 0
      }
  ],
  "laps": [
      {
          "id": 7951265336,
          "resource_state": 2,
          "name": "Lap 3",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 19,
          "moving_time": 19,
          "start_date": "2019-06-05T13:02:17Z",
          "start_date_local": "2019-06-05T07:02:17Z",
          "distance": 22.86,
          "start_index": 2,
          "end_index": 3,
          "total_elevation_gain": 0,
          "average_speed": 1.2,
          "max_speed": 1.3,
          "average_heartrate": 143.0,
          "max_heartrate": 143.0,
          "lap_index": 3,
          "split": 3
      },
      {
          "id": 7951265339,
          "resource_state": 2,
          "name": "Lap 5",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 12,
          "moving_time": 12,
          "start_date": "2019-06-05T13:03:01Z",
          "start_date_local": "2019-06-05T07:03:01Z",
          "distance": 22.86,
          "start_index": 5,
          "end_index": 8,
          "total_elevation_gain": 0,
          "average_speed": 1.91,
          "max_speed": 2.1,
          "average_heartrate": 144.1,
          "max_heartrate": 148.0,
          "lap_index": 5,
          "split": 5
      },
      {
          "id": 7951265344,
          "resource_state": 2,
          "name": "Lap 6",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 20,
          "moving_time": 20,
          "start_date": "2019-06-05T13:03:24Z",
          "start_date_local": "2019-06-05T07:03:24Z",
          "distance": 22.86,
          "start_index": 9,
          "end_index": 11,
          "total_elevation_gain": 0,
          "average_speed": 1.14,
          "max_speed": 1.2,
          "average_heartrate": 143.7,
          "max_heartrate": 145.0,
          "lap_index": 6,
          "split": 6
      },
      {
          "id": 7951265347,
          "resource_state": 2,
          "name": "Lap 7",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 18,
          "moving_time": 18,
          "start_date": "2019-06-05T13:03:57Z",
          "start_date_local": "2019-06-05T07:03:57Z",
          "distance": 22.86,
          "start_index": 12,
          "end_index": 16,
          "total_elevation_gain": 0,
          "average_speed": 1.27,
          "max_speed": 0.9,
          "average_heartrate": 142.9,
          "max_heartrate": 144.0,
          "lap_index": 7,
          "split": 7
      },
      {
          "id": 7951265349,
          "resource_state": 2,
          "name": "Lap 8",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 16,
          "moving_time": 16,
          "start_date": "2019-06-05T13:04:30Z",
          "start_date_local": "2019-06-05T07:04:30Z",
          "distance": 22.86,
          "start_index": 17,
          "end_index": 22,
          "total_elevation_gain": 0,
          "average_speed": 1.43,
          "max_speed": 1.3,
          "average_heartrate": 142.1,
          "max_heartrate": 143.0,
          "lap_index": 8,
          "split": 8
      },
      {
          "id": 7951265351,
          "resource_state": 2,
          "name": "Lap 9",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 19,
          "moving_time": 19,
          "start_date": "2019-06-05T13:05:07Z",
          "start_date_local": "2019-06-05T07:05:07Z",
          "distance": 22.86,
          "start_index": 23,
          "end_index": 26,
          "total_elevation_gain": 0,
          "average_speed": 1.2,
          "max_speed": 1.9,
          "average_heartrate": 142.7,
          "max_heartrate": 143.0,
          "lap_index": 9,
          "split": 9
      },
      {
          "id": 7951265354,
          "resource_state": 2,
          "name": "Lap 10",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 20,
          "moving_time": 20,
          "start_date": "2019-06-05T13:05:39Z",
          "start_date_local": "2019-06-05T07:05:39Z",
          "distance": 22.86,
          "start_index": 27,
          "end_index": 31,
          "total_elevation_gain": 0,
          "average_speed": 1.14,
          "max_speed": 2.1,
          "average_heartrate": 148.2,
          "max_heartrate": 149.0,
          "lap_index": 10,
          "split": 10
      },
      {
          "id": 7951265357,
          "resource_state": 2,
          "name": "Lap 11",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 18,
          "moving_time": 18,
          "start_date": "2019-06-05T13:06:13Z",
          "start_date_local": "2019-06-05T07:06:13Z",
          "distance": 22.86,
          "start_index": 32,
          "end_index": 36,
          "total_elevation_gain": 0,
          "average_speed": 1.27,
          "max_speed": 1.8,
          "average_heartrate": 149.3,
          "max_heartrate": 150.0,
          "lap_index": 11,
          "split": 11
      },
      {
          "id": 7951265359,
          "resource_state": 2,
          "name": "Lap 12",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 17,
          "moving_time": 17,
          "start_date": "2019-06-05T13:06:51Z",
          "start_date_local": "2019-06-05T07:06:51Z",
          "distance": 22.86,
          "start_index": 37,
          "end_index": 43,
          "total_elevation_gain": 0,
          "average_speed": 1.34,
          "max_speed": 1.1,
          "average_heartrate": 147.6,
          "max_heartrate": 151.0,
          "lap_index": 12,
          "split": 12
      },
      {
          "id": 7951265364,
          "resource_state": 2,
          "name": "Lap 13",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 20,
          "moving_time": 20,
          "start_date": "2019-06-05T13:07:53Z",
          "start_date_local": "2019-06-05T07:07:53Z",
          "distance": 22.86,
          "start_index": 44,
          "end_index": 48,
          "total_elevation_gain": 0,
          "average_speed": 1.14,
          "max_speed": 1.3,
          "average_heartrate": 132.4,
          "max_heartrate": 143.0,
          "lap_index": 13,
          "split": 13
      },
      {
          "id": 7951265368,
          "resource_state": 2,
          "name": "Lap 14",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 21,
          "moving_time": 21,
          "start_date": "2019-06-05T13:08:30Z",
          "start_date_local": "2019-06-05T07:08:30Z",
          "distance": 22.86,
          "start_index": 49,
          "end_index": 53,
          "total_elevation_gain": 0,
          "average_speed": 1.09,
          "max_speed": 1.5,
          "average_heartrate": 133.0,
          "max_heartrate": 134.0,
          "lap_index": 14,
          "split": 14
      },
      {
          "id": 7951265372,
          "resource_state": 2,
          "name": "Lap 15",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 28,
          "moving_time": 28,
          "start_date": "2019-06-05T13:09:07Z",
          "start_date_local": "2019-06-05T07:09:07Z",
          "distance": 22.86,
          "start_index": 54,
          "end_index": 58,
          "total_elevation_gain": 0,
          "average_speed": 0.82,
          "max_speed": 1.5,
          "average_heartrate": 133.0,
          "max_heartrate": 134.0,
          "lap_index": 15,
          "split": 15
      },
      {
          "id": 7951265377,
          "resource_state": 2,
          "name": "Lap 16",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 34,
          "moving_time": 34,
          "start_date": "2019-06-05T13:09:50Z",
          "start_date_local": "2019-06-05T07:09:50Z",
          "distance": 22.86,
          "start_index": 59,
          "end_index": 65,
          "total_elevation_gain": 0,
          "average_speed": 0.67,
          "max_speed": 1.1,
          "average_heartrate": 132.4,
          "max_heartrate": 136.0,
          "lap_index": 16,
          "split": 16
      },
      {
          "id": 7951265380,
          "resource_state": 2,
          "name": "Lap 17",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 17,
          "moving_time": 17,
          "start_date": "2019-06-05T13:10:51Z",
          "start_date_local": "2019-06-05T07:10:51Z",
          "distance": 22.86,
          "start_index": 66,
          "end_index": 76,
          "total_elevation_gain": 0,
          "average_speed": 1.34,
          "max_speed": 0.9,
          "average_heartrate": 131.7,
          "max_heartrate": 139.0,
          "lap_index": 17,
          "split": 17
      },
      {
          "id": 7951265384,
          "resource_state": 2,
          "name": "Lap 18",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 16,
          "moving_time": 16,
          "start_date": "2019-06-05T13:11:58Z",
          "start_date_local": "2019-06-05T07:11:58Z",
          "distance": 22.86,
          "start_index": 77,
          "end_index": 82,
          "total_elevation_gain": 0,
          "average_speed": 1.43,
          "max_speed": 1.3,
          "average_heartrate": 119.2,
          "max_heartrate": 124.0,
          "lap_index": 18,
          "split": 18
      },
      {
          "id": 7951265386,
          "resource_state": 2,
          "name": "Lap 19",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 40,
          "moving_time": 40,
          "start_date": "2019-06-05T13:12:34Z",
          "start_date_local": "2019-06-05T07:12:34Z",
          "distance": 22.86,
          "start_index": 83,
          "end_index": 86,
          "total_elevation_gain": 0,
          "average_speed": 0.57,
          "max_speed": 1.1,
          "average_heartrate": 133.7,
          "max_heartrate": 134.0,
          "lap_index": 19,
          "split": 19
      },
      {
          "id": 7951265388,
          "resource_state": 2,
          "name": "Lap 20",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 40,
          "moving_time": 40,
          "start_date": "2019-06-05T13:13:28Z",
          "start_date_local": "2019-06-05T07:13:28Z",
          "distance": 22.86,
          "start_index": 87,
          "end_index": 95,
          "total_elevation_gain": 0,
          "average_speed": 0.57,
          "max_speed": 0.9,
          "average_heartrate": 137.5,
          "max_heartrate": 139.0,
          "lap_index": 20,
          "split": 20
      },
      {
          "id": 7951265390,
          "resource_state": 2,
          "name": "Lap 21",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 39,
          "moving_time": 39,
          "start_date": "2019-06-05T13:14:50Z",
          "start_date_local": "2019-06-05T07:14:50Z",
          "distance": 22.86,
          "start_index": 96,
          "end_index": 129,
          "total_elevation_gain": 0,
          "average_speed": 0.59,
          "max_speed": 0.4,
          "average_heartrate": 119.0,
          "max_heartrate": 139.0,
          "lap_index": 21,
          "split": 21
      },
      {
          "id": 7951265393,
          "resource_state": 2,
          "name": "Lap 22",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 16,
          "moving_time": 16,
          "start_date": "2019-06-05T13:18:13Z",
          "start_date_local": "2019-06-05T07:18:13Z",
          "distance": 22.86,
          "start_index": 130,
          "end_index": 138,
          "total_elevation_gain": 0,
          "average_speed": 1.43,
          "max_speed": 0.9,
          "average_heartrate": 130.8,
          "max_heartrate": 135.0,
          "lap_index": 22,
          "split": 22
      },
      {
          "id": 7951265396,
          "resource_state": 2,
          "name": "Lap 23",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 19,
          "moving_time": 19,
          "start_date": "2019-06-05T13:19:06Z",
          "start_date_local": "2019-06-05T07:19:06Z",
          "distance": 22.86,
          "start_index": 139,
          "end_index": 141,
          "total_elevation_gain": 0,
          "average_speed": 1.2,
          "max_speed": 2.0,
          "average_heartrate": 131.3,
          "max_heartrate": 134.0,
          "lap_index": 23,
          "split": 23
      },
      {
          "id": 7951265400,
          "resource_state": 2,
          "name": "Lap 24",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 28,
          "moving_time": 28,
          "start_date": "2019-06-05T13:19:42Z",
          "start_date_local": "2019-06-05T07:19:42Z",
          "distance": 22.86,
          "start_index": 142,
          "end_index": 147,
          "total_elevation_gain": 0,
          "average_speed": 0.82,
          "max_speed": 1.3,
          "average_heartrate": 143.0,
          "max_heartrate": 147.0,
          "lap_index": 24,
          "split": 24
      },
      {
          "id": 7951265404,
          "resource_state": 2,
          "name": "Lap 25",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 25,
          "moving_time": 25,
          "start_date": "2019-06-05T13:20:31Z",
          "start_date_local": "2019-06-05T07:20:31Z",
          "distance": 22.86,
          "start_index": 148,
          "end_index": 159,
          "total_elevation_gain": 0,
          "average_speed": 0.91,
          "max_speed": 0.6,
          "average_heartrate": 137.3,
          "max_heartrate": 147.0,
          "lap_index": 25,
          "split": 25
      },
      {
          "id": 7951265406,
          "resource_state": 2,
          "name": "Lap 26",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 16,
          "moving_time": 16,
          "start_date": "2019-06-05T13:21:49Z",
          "start_date_local": "2019-06-05T07:21:49Z",
          "distance": 22.86,
          "start_index": 160,
          "end_index": 165,
          "total_elevation_gain": 0,
          "average_speed": 1.43,
          "max_speed": 1.3,
          "average_heartrate": 142.4,
          "max_heartrate": 146.0,
          "lap_index": 26,
          "split": 26
      },
      {
          "id": 7951265410,
          "resource_state": 2,
          "name": "Lap 27",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 21,
          "moving_time": 21,
          "start_date": "2019-06-05T13:22:31Z",
          "start_date_local": "2019-06-05T07:22:31Z",
          "distance": 22.86,
          "start_index": 166,
          "end_index": 174,
          "total_elevation_gain": 0,
          "average_speed": 1.09,
          "max_speed": 0.9,
          "average_heartrate": 142.2,
          "max_heartrate": 151.0,
          "lap_index": 27,
          "split": 27
      },
      {
          "id": 7951265412,
          "resource_state": 2,
          "name": "Lap 28",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 24,
          "moving_time": 24,
          "start_date": "2019-06-05T13:23:27Z",
          "start_date_local": "2019-06-05T07:23:27Z",
          "distance": 22.86,
          "start_index": 175,
          "end_index": 180,
          "total_elevation_gain": 0,
          "average_speed": 0.95,
          "max_speed": 1.3,
          "average_heartrate": 136.4,
          "max_heartrate": 137.0,
          "lap_index": 28,
          "split": 28
      },
      {
          "id": 7951265415,
          "resource_state": 2,
          "name": "Lap 29",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 18,
          "moving_time": 18,
          "start_date": "2019-06-05T13:24:11Z",
          "start_date_local": "2019-06-05T07:24:11Z",
          "distance": 22.86,
          "start_index": 181,
          "end_index": 187,
          "total_elevation_gain": 0,
          "average_speed": 1.27,
          "max_speed": 0.9,
          "average_heartrate": 143.2,
          "max_heartrate": 146.0,
          "lap_index": 29,
          "split": 29
      },
      {
          "id": 7951265417,
          "resource_state": 2,
          "name": "Lap 30",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 18,
          "moving_time": 18,
          "start_date": "2019-06-05T13:24:55Z",
          "start_date_local": "2019-06-05T07:24:55Z",
          "distance": 22.86,
          "start_index": 188,
          "end_index": 191,
          "total_elevation_gain": 0,
          "average_speed": 1.27,
          "max_speed": 1.9,
          "average_heartrate": 147.1,
          "max_heartrate": 148.0,
          "lap_index": 30,
          "split": 30
      },
      {
          "id": 7951265419,
          "resource_state": 2,
          "name": "Lap 31",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 31,
          "moving_time": 31,
          "start_date": "2019-06-05T13:25:23Z",
          "start_date_local": "2019-06-05T07:25:23Z",
          "distance": 22.86,
          "start_index": 192,
          "end_index": 220,
          "total_elevation_gain": 0,
          "average_speed": 0.74,
          "max_speed": 1.3,
          "average_heartrate": 120.8,
          "max_heartrate": 153.0,
          "lap_index": 31,
          "split": 31
      },
      {
          "id": 7951265421,
          "resource_state": 2,
          "name": "Lap 32",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 13,
          "moving_time": 13,
          "start_date": "2019-06-05T13:28:07Z",
          "start_date_local": "2019-06-05T07:28:07Z",
          "distance": 22.86,
          "start_index": 221,
          "end_index": 231,
          "total_elevation_gain": 0,
          "average_speed": 1.76,
          "max_speed": 0.7,
          "average_heartrate": 126.4,
          "max_heartrate": 138.0,
          "lap_index": 32,
          "split": 32
      },
      {
          "id": 7951265423,
          "resource_state": 2,
          "name": "Lap 33",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 20,
          "moving_time": 20,
          "start_date": "2019-06-05T13:29:06Z",
          "start_date_local": "2019-06-05T07:29:06Z",
          "distance": 22.86,
          "start_index": 232,
          "end_index": 234,
          "total_elevation_gain": 0,
          "average_speed": 1.14,
          "max_speed": 1.9,
          "average_heartrate": 130.2,
          "max_heartrate": 131.0,
          "lap_index": 33,
          "split": 33
      },
      {
          "id": 7951265425,
          "resource_state": 2,
          "name": "Lap 34",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 28,
          "moving_time": 28,
          "start_date": "2019-06-05T13:29:32Z",
          "start_date_local": "2019-06-05T07:29:32Z",
          "distance": 22.86,
          "start_index": 235,
          "end_index": 239,
          "total_elevation_gain": 0,
          "average_speed": 0.82,
          "max_speed": 1.0,
          "average_heartrate": 135.9,
          "max_heartrate": 137.0,
          "lap_index": 34,
          "split": 34
      },
      {
          "id": 7951265427,
          "resource_state": 2,
          "name": "Lap 35",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 16,
          "moving_time": 16,
          "start_date": "2019-06-05T13:30:20Z",
          "start_date_local": "2019-06-05T07:30:20Z",
          "distance": 22.86,
          "start_index": 240,
          "end_index": 246,
          "total_elevation_gain": 0,
          "average_speed": 1.43,
          "max_speed": 0.9,
          "average_heartrate": 140.9,
          "max_heartrate": 145.0,
          "lap_index": 35,
          "split": 35
      },
      {
          "id": 7951265429,
          "resource_state": 2,
          "name": "Lap 36",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 19,
          "moving_time": 19,
          "start_date": "2019-06-05T13:31:02Z",
          "start_date_local": "2019-06-05T07:31:02Z",
          "distance": 22.86,
          "start_index": 247,
          "end_index": 254,
          "total_elevation_gain": 0,
          "average_speed": 1.2,
          "max_speed": 1.2,
          "average_heartrate": 139.7,
          "max_heartrate": 147.0,
          "lap_index": 36,
          "split": 36
      },
      {
          "id": 7951265431,
          "resource_state": 2,
          "name": "Lap 37",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 17,
          "moving_time": 17,
          "start_date": "2019-06-05T13:31:48Z",
          "start_date_local": "2019-06-05T07:31:48Z",
          "distance": 22.86,
          "start_index": 255,
          "end_index": 258,
          "total_elevation_gain": 0,
          "average_speed": 1.34,
          "max_speed": 1.6,
          "average_heartrate": 131.8,
          "max_heartrate": 134.0,
          "lap_index": 37,
          "split": 37
      },
      {
          "id": 7951265434,
          "resource_state": 2,
          "name": "Lap 38",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 20,
          "moving_time": 20,
          "start_date": "2019-06-05T13:32:17Z",
          "start_date_local": "2019-06-05T07:32:17Z",
          "distance": 22.86,
          "start_index": 259,
          "end_index": 263,
          "total_elevation_gain": 0,
          "average_speed": 1.14,
          "max_speed": 0.9,
          "average_heartrate": 141.6,
          "max_heartrate": 144.0,
          "lap_index": 38,
          "split": 38
      },
      {
          "id": 7951265437,
          "resource_state": 2,
          "name": "Lap 39",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 19,
          "moving_time": 19,
          "start_date": "2019-06-05T13:32:53Z",
          "start_date_local": "2019-06-05T07:32:53Z",
          "distance": 22.86,
          "start_index": 264,
          "end_index": 268,
          "total_elevation_gain": 0,
          "average_speed": 1.2,
          "max_speed": 0.9,
          "average_heartrate": 145.8,
          "max_heartrate": 147.0,
          "lap_index": 39,
          "split": 39
      },
      {
          "id": 7951265439,
          "resource_state": 2,
          "name": "Lap 40",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 20,
          "moving_time": 20,
          "start_date": "2019-06-05T13:33:29Z",
          "start_date_local": "2019-06-05T07:33:29Z",
          "distance": 22.86,
          "start_index": 269,
          "end_index": 273,
          "total_elevation_gain": 0,
          "average_speed": 1.14,
          "max_speed": 1.2,
          "average_heartrate": 146.9,
          "max_heartrate": 148.0,
          "lap_index": 40,
          "split": 40
      },
      {
          "id": 7951265441,
          "resource_state": 2,
          "name": "Lap 41",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 17,
          "moving_time": 17,
          "start_date": "2019-06-05T13:34:06Z",
          "start_date_local": "2019-06-05T07:34:06Z",
          "distance": 22.86,
          "start_index": 274,
          "end_index": 278,
          "total_elevation_gain": 0,
          "average_speed": 1.34,
          "max_speed": 0.8,
          "average_heartrate": 147.8,
          "max_heartrate": 148.0,
          "lap_index": 41,
          "split": 41
      },
      {
          "id": 7951265442,
          "resource_state": 2,
          "name": "Lap 42",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 16,
          "moving_time": 16,
          "start_date": "2019-06-05T13:34:44Z",
          "start_date_local": "2019-06-05T07:34:44Z",
          "distance": 22.86,
          "start_index": 279,
          "end_index": 290,
          "total_elevation_gain": 0,
          "average_speed": 1.43,
          "max_speed": 0.5,
          "average_heartrate": 133.2,
          "max_heartrate": 149.0,
          "lap_index": 42,
          "split": 42
      },
      {
          "id": 7951265444,
          "resource_state": 2,
          "name": "Lap 43",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 17,
          "moving_time": 17,
          "start_date": "2019-06-05T13:35:51Z",
          "start_date_local": "2019-06-05T07:35:51Z",
          "distance": 22.86,
          "start_index": 291,
          "end_index": 294,
          "total_elevation_gain": 0,
          "average_speed": 1.34,
          "max_speed": 1.5,
          "average_heartrate": 123.2,
          "max_heartrate": 128.0,
          "lap_index": 43,
          "split": 43
      },
      {
          "id": 7951265446,
          "resource_state": 2,
          "name": "Lap 44",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 13,
          "moving_time": 13,
          "start_date": "2019-06-05T13:36:25Z",
          "start_date_local": "2019-06-05T07:36:25Z",
          "distance": 22.86,
          "start_index": 295,
          "end_index": 300,
          "total_elevation_gain": 0,
          "average_speed": 1.76,
          "max_speed": 0.8,
          "average_heartrate": 136.5,
          "max_heartrate": 140.0,
          "lap_index": 44,
          "split": 44
      },
      {
          "id": 7951265449,
          "resource_state": 2,
          "name": "Lap 45",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 19,
          "moving_time": 19,
          "start_date": "2019-06-05T13:37:02Z",
          "start_date_local": "2019-06-05T07:37:02Z",
          "distance": 22.86,
          "start_index": 301,
          "end_index": 304,
          "total_elevation_gain": 0,
          "average_speed": 1.2,
          "max_speed": 1.6,
          "average_heartrate": 143.8,
          "max_heartrate": 145.0,
          "lap_index": 45,
          "split": 45
      },
      {
          "id": 7951265452,
          "resource_state": 2,
          "name": "Lap 46",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 19,
          "moving_time": 19,
          "start_date": "2019-06-05T13:37:34Z",
          "start_date_local": "2019-06-05T07:37:34Z",
          "distance": 22.86,
          "start_index": 305,
          "end_index": 309,
          "total_elevation_gain": 0,
          "average_speed": 1.2,
          "max_speed": 0.9,
          "average_heartrate": 149.8,
          "max_heartrate": 151.0,
          "lap_index": 46,
          "split": 46
      },
      {
          "id": 7951265454,
          "resource_state": 2,
          "name": "Lap 47",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 16,
          "moving_time": 16,
          "start_date": "2019-06-05T13:38:12Z",
          "start_date_local": "2019-06-05T07:38:12Z",
          "distance": 22.86,
          "start_index": 310,
          "end_index": 315,
          "total_elevation_gain": 0,
          "average_speed": 1.43,
          "max_speed": 1.7,
          "average_heartrate": 150.9,
          "max_heartrate": 151.0,
          "lap_index": 47,
          "split": 47
      },
      {
          "id": 7951265456,
          "resource_state": 2,
          "name": "Lap 48",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 16,
          "moving_time": 16,
          "start_date": "2019-06-05T13:38:47Z",
          "start_date_local": "2019-06-05T07:38:47Z",
          "distance": 22.86,
          "start_index": 316,
          "end_index": 319,
          "total_elevation_gain": 0,
          "average_speed": 1.43,
          "max_speed": 1.4,
          "average_heartrate": 153.7,
          "max_heartrate": 154.0,
          "lap_index": 48,
          "split": 48
      },
      {
          "id": 7951265457,
          "resource_state": 2,
          "name": "Lap 49",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 14,
          "moving_time": 14,
          "start_date": "2019-06-05T13:39:19Z",
          "start_date_local": "2019-06-05T07:39:19Z",
          "distance": 22.86,
          "start_index": 320,
          "end_index": 326,
          "total_elevation_gain": 0,
          "average_speed": 1.63,
          "max_speed": 0.7,
          "average_heartrate": 153.0,
          "max_heartrate": 156.0,
          "lap_index": 49,
          "split": 49
      },
      {
          "id": 7951265460,
          "resource_state": 2,
          "name": "Lap 50",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 14,
          "moving_time": 14,
          "start_date": "2019-06-05T13:39:57Z",
          "start_date_local": "2019-06-05T07:39:57Z",
          "distance": 22.86,
          "start_index": 327,
          "end_index": 339,
          "total_elevation_gain": 0,
          "average_speed": 1.63,
          "max_speed": 0.5,
          "average_heartrate": 133.5,
          "max_heartrate": 156.0,
          "lap_index": 50,
          "split": 50
      },
      {
          "id": 7951265462,
          "resource_state": 2,
          "name": "Lap 51",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 18,
          "moving_time": 18,
          "start_date": "2019-06-05T13:41:03Z",
          "start_date_local": "2019-06-05T07:41:03Z",
          "distance": 22.86,
          "start_index": 340,
          "end_index": 342,
          "total_elevation_gain": 0,
          "average_speed": 1.27,
          "max_speed": 0.6,
          "average_heartrate": 119.7,
          "max_heartrate": 120.0,
          "lap_index": 51,
          "split": 51
      },
      {
          "id": 7951265466,
          "resource_state": 2,
          "name": "Lap 52",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 19,
          "moving_time": 19,
          "start_date": "2019-06-05T13:41:31Z",
          "start_date_local": "2019-06-05T07:41:31Z",
          "distance": 22.86,
          "start_index": 343,
          "end_index": 346,
          "total_elevation_gain": 0,
          "average_speed": 1.2,
          "max_speed": 1.9,
          "average_heartrate": 139.6,
          "max_heartrate": 140.0,
          "lap_index": 52,
          "split": 52
      },
      {
          "id": 7951265470,
          "resource_state": 2,
          "name": "Lap 53",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 20,
          "moving_time": 20,
          "start_date": "2019-06-05T13:42:05Z",
          "start_date_local": "2019-06-05T07:42:05Z",
          "distance": 22.86,
          "start_index": 347,
          "end_index": 352,
          "total_elevation_gain": 0,
          "average_speed": 1.14,
          "max_speed": 1.3,
          "average_heartrate": 154.1,
          "max_heartrate": 156.0,
          "lap_index": 53,
          "split": 53
      },
      {
          "id": 7951265473,
          "resource_state": 2,
          "name": "Lap 54",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 18,
          "moving_time": 18,
          "start_date": "2019-06-05T13:42:44Z",
          "start_date_local": "2019-06-05T07:42:44Z",
          "distance": 22.86,
          "start_index": 353,
          "end_index": 356,
          "total_elevation_gain": 0,
          "average_speed": 1.27,
          "max_speed": 1.0,
          "average_heartrate": 159.2,
          "max_heartrate": 161.0,
          "lap_index": 54,
          "split": 54
      },
      {
          "id": 7951265476,
          "resource_state": 2,
          "name": "Lap 55",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 16,
          "moving_time": 16,
          "start_date": "2019-06-05T13:43:19Z",
          "start_date_local": "2019-06-05T07:43:19Z",
          "distance": 22.86,
          "start_index": 357,
          "end_index": 361,
          "total_elevation_gain": 0,
          "average_speed": 1.43,
          "max_speed": 0.9,
          "average_heartrate": 162.7,
          "max_heartrate": 163.0,
          "lap_index": 55,
          "split": 55
      },
      {
          "id": 7951265479,
          "resource_state": 2,
          "name": "Lap 56",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 19,
          "moving_time": 19,
          "start_date": "2019-06-05T13:43:55Z",
          "start_date_local": "2019-06-05T07:43:55Z",
          "distance": 22.86,
          "start_index": 362,
          "end_index": 367,
          "total_elevation_gain": 0,
          "average_speed": 1.2,
          "max_speed": 1.3,
          "average_heartrate": 163.3,
          "max_heartrate": 165.0,
          "lap_index": 56,
          "split": 56
      },
      {
          "id": 7951265482,
          "resource_state": 2,
          "name": "Lap 57",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 16,
          "moving_time": 16,
          "start_date": "2019-06-05T13:44:33Z",
          "start_date_local": "2019-06-05T07:44:33Z",
          "distance": 22.86,
          "start_index": 368,
          "end_index": 372,
          "total_elevation_gain": 0,
          "average_speed": 1.43,
          "max_speed": 1.4,
          "average_heartrate": 164.3,
          "max_heartrate": 165.0,
          "lap_index": 57,
          "split": 57
      },
      {
          "id": 7951265486,
          "resource_state": 2,
          "name": "Lap 58",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 16,
          "moving_time": 16,
          "start_date": "2019-06-05T13:45:06Z",
          "start_date_local": "2019-06-05T07:45:06Z",
          "distance": 22.86,
          "start_index": 373,
          "end_index": 381,
          "total_elevation_gain": 0,
          "average_speed": 1.43,
          "max_speed": 1.2,
          "average_heartrate": 160.9,
          "max_heartrate": 166.0,
          "lap_index": 58,
          "split": 58
      },
      {
          "id": 7951265488,
          "resource_state": 2,
          "name": "Lap 59",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 18,
          "moving_time": 18,
          "start_date": "2019-06-05T13:46:03Z",
          "start_date_local": "2019-06-05T07:46:03Z",
          "distance": 22.86,
          "start_index": 382,
          "end_index": 386,
          "total_elevation_gain": 0,
          "average_speed": 1.27,
          "max_speed": 1.1,
          "average_heartrate": 149.1,
          "max_heartrate": 157.0,
          "lap_index": 59,
          "split": 59
      },
      {
          "id": 7951265491,
          "resource_state": 2,
          "name": "Lap 60",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 20,
          "moving_time": 20,
          "start_date": "2019-06-05T13:46:38Z",
          "start_date_local": "2019-06-05T07:46:38Z",
          "distance": 22.86,
          "start_index": 387,
          "end_index": 391,
          "total_elevation_gain": 0,
          "average_speed": 1.14,
          "max_speed": 1.0,
          "average_heartrate": 153.0,
          "max_heartrate": 153.0,
          "lap_index": 60,
          "split": 60
      },
      {
          "id": 7951265494,
          "resource_state": 2,
          "name": "Lap 61",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 17,
          "moving_time": 17,
          "start_date": "2019-06-05T13:47:14Z",
          "start_date_local": "2019-06-05T07:47:14Z",
          "distance": 22.86,
          "start_index": 392,
          "end_index": 396,
          "total_elevation_gain": 0,
          "average_speed": 1.34,
          "max_speed": 1.5,
          "average_heartrate": 156.9,
          "max_heartrate": 158.0,
          "lap_index": 61,
          "split": 61
      },
      {
          "id": 7951265497,
          "resource_state": 2,
          "name": "Lap 62",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 22,
          "moving_time": 22,
          "start_date": "2019-06-05T13:47:48Z",
          "start_date_local": "2019-06-05T07:47:48Z",
          "distance": 22.86,
          "start_index": 397,
          "end_index": 401,
          "total_elevation_gain": 0,
          "average_speed": 1.04,
          "max_speed": 1.5,
          "average_heartrate": 163.2,
          "max_heartrate": 164.0,
          "lap_index": 62,
          "split": 62
      },
      {
          "id": 7951265500,
          "resource_state": 2,
          "name": "Lap 63",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 20,
          "moving_time": 20,
          "start_date": "2019-06-05T13:48:27Z",
          "start_date_local": "2019-06-05T07:48:27Z",
          "distance": 22.86,
          "start_index": 402,
          "end_index": 406,
          "total_elevation_gain": 0,
          "average_speed": 1.14,
          "max_speed": 1.3,
          "average_heartrate": 164.8,
          "max_heartrate": 165.0,
          "lap_index": 63,
          "split": 63
      },
      {
          "id": 7951265503,
          "resource_state": 2,
          "name": "Lap 64",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 16,
          "moving_time": 16,
          "start_date": "2019-06-05T13:49:06Z",
          "start_date_local": "2019-06-05T07:49:06Z",
          "distance": 22.86,
          "start_index": 407,
          "end_index": 415,
          "total_elevation_gain": 0,
          "average_speed": 1.43,
          "max_speed": 0.6,
          "average_heartrate": 160.5,
          "max_heartrate": 166.0,
          "lap_index": 64,
          "split": 64
      },
      {
          "id": 7951265506,
          "resource_state": 2,
          "name": "Lap 65",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 19,
          "moving_time": 19,
          "start_date": "2019-06-05T13:49:59Z",
          "start_date_local": "2019-06-05T07:49:59Z",
          "distance": 22.86,
          "start_index": 416,
          "end_index": 420,
          "total_elevation_gain": 0,
          "average_speed": 1.2,
          "max_speed": 1.3,
          "average_heartrate": 150.6,
          "max_heartrate": 152.0,
          "lap_index": 65,
          "split": 65
      },
      {
          "id": 7951265509,
          "resource_state": 2,
          "name": "Lap 66",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 16,
          "moving_time": 16,
          "start_date": "2019-06-05T13:50:32Z",
          "start_date_local": "2019-06-05T07:50:32Z",
          "distance": 22.86,
          "start_index": 421,
          "end_index": 424,
          "total_elevation_gain": 0,
          "average_speed": 1.43,
          "max_speed": 1.3,
          "average_heartrate": 156.2,
          "max_heartrate": 157.0,
          "lap_index": 66,
          "split": 66
      },
      {
          "id": 7951265511,
          "resource_state": 2,
          "name": "Lap 67",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 19,
          "moving_time": 19,
          "start_date": "2019-06-05T13:51:06Z",
          "start_date_local": "2019-06-05T07:51:06Z",
          "distance": 22.86,
          "start_index": 425,
          "end_index": 429,
          "total_elevation_gain": 0,
          "average_speed": 1.2,
          "max_speed": 0.9,
          "average_heartrate": 160.3,
          "max_heartrate": 161.0,
          "lap_index": 67,
          "split": 67
      },
      {
          "id": 7951265512,
          "resource_state": 2,
          "name": "Lap 68",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 17,
          "moving_time": 17,
          "start_date": "2019-06-05T13:51:42Z",
          "start_date_local": "2019-06-05T07:51:42Z",
          "distance": 22.86,
          "start_index": 430,
          "end_index": 437,
          "total_elevation_gain": 0,
          "average_speed": 1.34,
          "max_speed": 1.2,
          "average_heartrate": 162.3,
          "max_heartrate": 166.0,
          "lap_index": 68,
          "split": 68
      },
      {
          "id": 7951265515,
          "resource_state": 2,
          "name": "Lap 69",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 22,
          "moving_time": 22,
          "start_date": "2019-06-05T13:52:31Z",
          "start_date_local": "2019-06-05T07:52:31Z",
          "distance": 22.86,
          "start_index": 438,
          "end_index": 441,
          "total_elevation_gain": 0,
          "average_speed": 1.04,
          "max_speed": 1.0,
          "average_heartrate": 153.3,
          "max_heartrate": 160.0,
          "lap_index": 69,
          "split": 69
      },
      {
          "id": 7951265516,
          "resource_state": 2,
          "name": "Lap 70",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 10,
          "moving_time": 10,
          "start_date": "2019-06-05T13:53:10Z",
          "start_date_local": "2019-06-05T07:53:10Z",
          "distance": 22.86,
          "start_index": 442,
          "end_index": 469,
          "total_elevation_gain": 0,
          "average_speed": 2.29,
          "max_speed": 0.4,
          "average_heartrate": 131.7,
          "max_heartrate": 157.0,
          "lap_index": 70,
          "split": 70
      },
      {
          "id": 7951265518,
          "resource_state": 2,
          "name": "Lap 71",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 17,
          "moving_time": 17,
          "start_date": "2019-06-05T13:55:29Z",
          "start_date_local": "2019-06-05T07:55:29Z",
          "distance": 22.86,
          "start_index": 470,
          "end_index": 471,
          "total_elevation_gain": 0,
          "average_speed": 1.34,
          "max_speed": 0.5,
          "average_heartrate": 124.0,
          "max_heartrate": 124.0,
          "lap_index": 71,
          "split": 71
      },
      {
          "id": 7951265520,
          "resource_state": 2,
          "name": "Lap 72",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 20,
          "moving_time": 20,
          "start_date": "2019-06-05T13:55:55Z",
          "start_date_local": "2019-06-05T07:55:55Z",
          "distance": 22.86,
          "start_index": 472,
          "end_index": 478,
          "total_elevation_gain": 0,
          "average_speed": 1.14,
          "max_speed": 1.1,
          "average_heartrate": 154.1,
          "max_heartrate": 159.0,
          "lap_index": 72,
          "split": 72
      },
      {
          "id": 7951265521,
          "resource_state": 2,
          "name": "Lap 73",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 19,
          "moving_time": 19,
          "start_date": "2019-06-05T13:56:39Z",
          "start_date_local": "2019-06-05T07:56:39Z",
          "distance": 22.86,
          "start_index": 479,
          "end_index": 483,
          "total_elevation_gain": 0,
          "average_speed": 1.2,
          "max_speed": 1.6,
          "average_heartrate": 158.8,
          "max_heartrate": 164.0,
          "lap_index": 73,
          "split": 73
      },
      {
          "id": 7951265523,
          "resource_state": 2,
          "name": "Lap 74",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 10,
          "moving_time": 10,
          "start_date": "2019-06-05T13:57:17Z",
          "start_date_local": "2019-06-05T07:57:17Z",
          "distance": 22.86,
          "start_index": 484,
          "end_index": 495,
          "total_elevation_gain": 0,
          "average_speed": 2.29,
          "max_speed": 0.8,
          "average_heartrate": 145.5,
          "max_heartrate": 157.0,
          "lap_index": 74,
          "split": 74
      },
      {
          "id": 7951265525,
          "resource_state": 2,
          "name": "Lap 75",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 17,
          "moving_time": 17,
          "start_date": "2019-06-05T13:58:19Z",
          "start_date_local": "2019-06-05T07:58:19Z",
          "distance": 22.86,
          "start_index": 496,
          "end_index": 498,
          "total_elevation_gain": 0,
          "average_speed": 1.34,
          "max_speed": 1.6,
          "average_heartrate": 136.1,
          "max_heartrate": 138.0,
          "lap_index": 75,
          "split": 75
      },
      {
          "id": 7951265527,
          "resource_state": 2,
          "name": "Lap 76",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 16,
          "moving_time": 16,
          "start_date": "2019-06-05T13:58:47Z",
          "start_date_local": "2019-06-05T07:58:47Z",
          "distance": 22.86,
          "start_index": 499,
          "end_index": 504,
          "total_elevation_gain": 0,
          "average_speed": 1.43,
          "max_speed": 1.4,
          "average_heartrate": 159.5,
          "max_heartrate": 168.0,
          "lap_index": 76,
          "split": 76
      },
      {
          "id": 7951265530,
          "resource_state": 2,
          "name": "Lap 77",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 18,
          "moving_time": 18,
          "start_date": "2019-06-05T13:59:26Z",
          "start_date_local": "2019-06-05T07:59:26Z",
          "distance": 22.86,
          "start_index": 505,
          "end_index": 508,
          "total_elevation_gain": 0,
          "average_speed": 1.27,
          "max_speed": 1.9,
          "average_heartrate": 168.3,
          "max_heartrate": 169.0,
          "lap_index": 77,
          "split": 77
      },
      {
          "id": 7951265532,
          "resource_state": 2,
          "name": "Lap 78",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 37,
          "moving_time": 37,
          "start_date": "2019-06-05T14:00:00Z",
          "start_date_local": "2019-06-05T08:00:00Z",
          "distance": 22.86,
          "start_index": 509,
          "end_index": 513,
          "total_elevation_gain": 0,
          "average_speed": 0.62,
          "max_speed": 1.2,
          "average_heartrate": 172.5,
          "max_heartrate": 173.0,
          "lap_index": 78,
          "split": 78
      },
      {
          "id": 7951265535,
          "resource_state": 2,
          "name": "Lap 79",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 60,
          "moving_time": 60,
          "start_date": "2019-06-05T14:00:54Z",
          "start_date_local": "2019-06-05T08:00:54Z",
          "distance": 22.86,
          "start_index": 514,
          "end_index": 521,
          "total_elevation_gain": 0,
          "average_speed": 0.38,
          "max_speed": 0.8,
          "average_heartrate": 166.0,
          "max_heartrate": 173.0,
          "lap_index": 79,
          "split": 79
      },
      {
          "id": 7951265537,
          "resource_state": 2,
          "name": "Lap 80",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 18,
          "moving_time": 18,
          "start_date": "2019-06-05T14:02:28Z",
          "start_date_local": "2019-06-05T08:02:28Z",
          "distance": 22.86,
          "start_index": 522,
          "end_index": 535,
          "total_elevation_gain": 0,
          "average_speed": 1.27,
          "max_speed": 0.8,
          "average_heartrate": 142.8,
          "max_heartrate": 165.0,
          "lap_index": 80,
          "split": 80
      },
      {
          "id": 7951265538,
          "resource_state": 2,
          "name": "Lap 81",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 11,
          "moving_time": 11,
          "start_date": "2019-06-05T14:03:48Z",
          "start_date_local": "2019-06-05T08:03:48Z",
          "distance": 22.86,
          "start_index": 536,
          "end_index": 541,
          "total_elevation_gain": 0,
          "average_speed": 2.08,
          "max_speed": 0.8,
          "average_heartrate": 155.6,
          "max_heartrate": 163.0,
          "lap_index": 81,
          "split": 81
      },
      {
          "id": 7951265540,
          "resource_state": 2,
          "name": "Lap 82",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 17,
          "moving_time": 17,
          "start_date": "2019-06-05T14:04:26Z",
          "start_date_local": "2019-06-05T08:04:26Z",
          "distance": 22.86,
          "start_index": 542,
          "end_index": 545,
          "total_elevation_gain": 0,
          "average_speed": 1.34,
          "max_speed": 1.0,
          "average_heartrate": 161.1,
          "max_heartrate": 163.0,
          "lap_index": 82,
          "split": 82
      },
      {
          "id": 7951265543,
          "resource_state": 2,
          "name": "Lap 83",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 15,
          "moving_time": 15,
          "start_date": "2019-06-05T14:04:57Z",
          "start_date_local": "2019-06-05T08:04:57Z",
          "distance": 22.86,
          "start_index": 546,
          "end_index": 550,
          "total_elevation_gain": 0,
          "average_speed": 1.52,
          "max_speed": 1.3,
          "average_heartrate": 168.2,
          "max_heartrate": 169.0,
          "lap_index": 83,
          "split": 83
      },
      {
          "id": 7951265545,
          "resource_state": 2,
          "name": "Lap 84",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 14,
          "moving_time": 14,
          "start_date": "2019-06-05T14:05:31Z",
          "start_date_local": "2019-06-05T08:05:31Z",
          "distance": 22.86,
          "start_index": 551,
          "end_index": 555,
          "total_elevation_gain": 0,
          "average_speed": 1.63,
          "max_speed": 0.9,
          "average_heartrate": 169.7,
          "max_heartrate": 170.0,
          "lap_index": 84,
          "split": 84
      },
      {
          "id": 7951265547,
          "resource_state": 2,
          "name": "Lap 85",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 30,
          "moving_time": 30,
          "start_date": "2019-06-05T14:06:03Z",
          "start_date_local": "2019-06-05T08:06:03Z",
          "distance": 22.86,
          "start_index": 556,
          "end_index": 559,
          "total_elevation_gain": 0,
          "average_speed": 0.76,
          "max_speed": 1.0,
          "average_heartrate": 174.5,
          "max_heartrate": 175.0,
          "lap_index": 85,
          "split": 85
      },
      {
          "id": 7951265549,
          "resource_state": 2,
          "name": "Lap 86",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 24,
          "moving_time": 24,
          "start_date": "2019-06-05T14:06:48Z",
          "start_date_local": "2019-06-05T08:06:48Z",
          "distance": 22.86,
          "start_index": 560,
          "end_index": 567,
          "total_elevation_gain": 0,
          "average_speed": 0.95,
          "max_speed": 1.4,
          "average_heartrate": 172.3,
          "max_heartrate": 178.0,
          "lap_index": 86,
          "split": 86
      },
      {
          "id": 7951265552,
          "resource_state": 2,
          "name": "Lap 87",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 11,
          "moving_time": 11,
          "start_date": "2019-06-05T14:07:42Z",
          "start_date_local": "2019-06-05T08:07:42Z",
          "distance": 22.86,
          "start_index": 568,
          "end_index": 578,
          "total_elevation_gain": 0,
          "average_speed": 2.08,
          "max_speed": 0.6,
          "average_heartrate": 150.1,
          "max_heartrate": 168.0,
          "lap_index": 87,
          "split": 87
      },
      {
          "id": 7951265556,
          "resource_state": 2,
          "name": "Lap 88",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 16,
          "moving_time": 16,
          "start_date": "2019-06-05T14:08:37Z",
          "start_date_local": "2019-06-05T08:08:37Z",
          "distance": 22.86,
          "start_index": 579,
          "end_index": 582,
          "total_elevation_gain": 0,
          "average_speed": 1.43,
          "max_speed": 1.0,
          "average_heartrate": 146.4,
          "max_heartrate": 152.0,
          "lap_index": 88,
          "split": 88
      },
      {
          "id": 7951265557,
          "resource_state": 2,
          "name": "Lap 89",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 17,
          "moving_time": 17,
          "start_date": "2019-06-05T14:09:07Z",
          "start_date_local": "2019-06-05T08:09:07Z",
          "distance": 22.86,
          "start_index": 583,
          "end_index": 587,
          "total_elevation_gain": 0,
          "average_speed": 1.34,
          "max_speed": 2.1,
          "average_heartrate": 157.5,
          "max_heartrate": 158.0,
          "lap_index": 89,
          "split": 89
      },
      {
          "id": 7951265560,
          "resource_state": 2,
          "name": "Lap 90",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 19,
          "moving_time": 19,
          "start_date": "2019-06-05T14:09:39Z",
          "start_date_local": "2019-06-05T08:09:39Z",
          "distance": 22.86,
          "start_index": 588,
          "end_index": 591,
          "total_elevation_gain": 0,
          "average_speed": 1.2,
          "max_speed": 1.2,
          "average_heartrate": 160.2,
          "max_heartrate": 161.0,
          "lap_index": 90,
          "split": 90
      },
      {
          "id": 7951265563,
          "resource_state": 2,
          "name": "Lap 91",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 13,
          "moving_time": 13,
          "start_date": "2019-06-05T14:10:15Z",
          "start_date_local": "2019-06-05T08:10:15Z",
          "distance": 22.86,
          "start_index": 592,
          "end_index": 598,
          "total_elevation_gain": 0,
          "average_speed": 1.76,
          "max_speed": 0.9,
          "average_heartrate": 167.3,
          "max_heartrate": 168.0,
          "lap_index": 91,
          "split": 91
      },
      {
          "id": 7951265568,
          "resource_state": 2,
          "name": "Lap 92",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 20,
          "moving_time": 20,
          "start_date": "2019-06-05T14:10:50Z",
          "start_date_local": "2019-06-05T08:10:50Z",
          "distance": 22.86,
          "start_index": 599,
          "end_index": 601,
          "total_elevation_gain": 0,
          "average_speed": 1.14,
          "max_speed": 0.8,
          "average_heartrate": 170.0,
          "max_heartrate": 170.0,
          "lap_index": 92,
          "split": 92
      },
      {
          "id": 7951265570,
          "resource_state": 2,
          "name": "Lap 93",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 18,
          "moving_time": 18,
          "start_date": "2019-06-05T14:11:16Z",
          "start_date_local": "2019-06-05T08:11:16Z",
          "distance": 22.86,
          "start_index": 602,
          "end_index": 607,
          "total_elevation_gain": 0,
          "average_speed": 1.27,
          "max_speed": 2.3,
          "average_heartrate": 172.9,
          "max_heartrate": 174.0,
          "lap_index": 93,
          "split": 93
      },
      {
          "id": 7951265572,
          "resource_state": 2,
          "name": "Lap 94",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 16,
          "moving_time": 16,
          "start_date": "2019-06-05T14:11:55Z",
          "start_date_local": "2019-06-05T08:11:55Z",
          "distance": 22.86,
          "start_index": 608,
          "end_index": 612,
          "total_elevation_gain": 0,
          "average_speed": 1.43,
          "max_speed": 1.7,
          "average_heartrate": 174.6,
          "max_heartrate": 175.0,
          "lap_index": 94,
          "split": 94
      },
      {
          "id": 7951265574,
          "resource_state": 2,
          "name": "Lap 95",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 20,
          "moving_time": 20,
          "start_date": "2019-06-05T14:12:30Z",
          "start_date_local": "2019-06-05T08:12:30Z",
          "distance": 22.86,
          "start_index": 613,
          "end_index": 616,
          "total_elevation_gain": 0,
          "average_speed": 1.14,
          "max_speed": 2.1,
          "average_heartrate": 171.3,
          "max_heartrate": 175.0,
          "lap_index": 95,
          "split": 95
      },
      {
          "id": 7951265575,
          "resource_state": 2,
          "name": "Lap 96",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 11,
          "moving_time": 11,
          "start_date": "2019-06-05T14:13:04Z",
          "start_date_local": "2019-06-05T08:13:04Z",
          "distance": 22.86,
          "start_index": 617,
          "end_index": 622,
          "total_elevation_gain": 0,
          "average_speed": 2.08,
          "max_speed": 0.8,
          "average_heartrate": 171.8,
          "max_heartrate": 174.0,
          "lap_index": 96,
          "split": 96
      },
      {
          "id": 7951265578,
          "resource_state": 2,
          "name": "Lap 97",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 16,
          "moving_time": 16,
          "start_date": "2019-06-05T14:13:38Z",
          "start_date_local": "2019-06-05T08:13:38Z",
          "distance": 22.86,
          "start_index": 623,
          "end_index": 625,
          "total_elevation_gain": 0,
          "average_speed": 1.43,
          "max_speed": 1.3,
          "average_heartrate": 165.6,
          "max_heartrate": 169.0,
          "lap_index": 97,
          "split": 97
      },
      {
          "id": 7951265579,
          "resource_state": 2,
          "name": "Lap 98",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 29,
          "moving_time": 29,
          "start_date": "2019-06-05T14:14:06Z",
          "start_date_local": "2019-06-05T08:14:06Z",
          "distance": 22.86,
          "start_index": 626,
          "end_index": 635,
          "total_elevation_gain": 0,
          "average_speed": 0.79,
          "max_speed": 0.8,
          "average_heartrate": 148.4,
          "max_heartrate": 164.0,
          "lap_index": 98,
          "split": 98
      },
      {
          "id": 7951265581,
          "resource_state": 2,
          "name": "Lap 99",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 18,
          "moving_time": 18,
          "start_date": "2019-06-05T14:15:17Z",
          "start_date_local": "2019-06-05T08:15:17Z",
          "distance": 22.86,
          "start_index": 636,
          "end_index": 642,
          "total_elevation_gain": 0,
          "average_speed": 1.27,
          "max_speed": 1.1,
          "average_heartrate": 156.8,
          "max_heartrate": 161.0,
          "lap_index": 99,
          "split": 99
      },
      {
          "id": 7951265584,
          "resource_state": 2,
          "name": "Lap 100",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 18,
          "moving_time": 18,
          "start_date": "2019-06-05T14:16:04Z",
          "start_date_local": "2019-06-05T08:16:04Z",
          "distance": 22.86,
          "start_index": 643,
          "end_index": 648,
          "total_elevation_gain": 0,
          "average_speed": 1.27,
          "max_speed": 1.1,
          "average_heartrate": 164.6,
          "max_heartrate": 166.0,
          "lap_index": 100,
          "split": 100
      },
      {
          "id": 7951265587,
          "resource_state": 2,
          "name": "Lap 101",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 18,
          "moving_time": 18,
          "start_date": "2019-06-05T14:16:40Z",
          "start_date_local": "2019-06-05T08:16:40Z",
          "distance": 22.86,
          "start_index": 649,
          "end_index": 652,
          "total_elevation_gain": 0,
          "average_speed": 1.27,
          "max_speed": 1.3,
          "average_heartrate": 170.7,
          "max_heartrate": 171.0,
          "lap_index": 101,
          "split": 101
      },
      {
          "id": 7951265590,
          "resource_state": 2,
          "name": "Lap 102",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 13,
          "moving_time": 13,
          "start_date": "2019-06-05T14:17:12Z",
          "start_date_local": "2019-06-05T08:17:12Z",
          "distance": 22.86,
          "start_index": 653,
          "end_index": 658,
          "total_elevation_gain": 0,
          "average_speed": 1.76,
          "max_speed": 1.6,
          "average_heartrate": 173.8,
          "max_heartrate": 174.0,
          "lap_index": 102,
          "split": 102
      },
      {
          "id": 7951265592,
          "resource_state": 2,
          "name": "Lap 103",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 15,
          "moving_time": 15,
          "start_date": "2019-06-05T14:17:49Z",
          "start_date_local": "2019-06-05T08:17:49Z",
          "distance": 22.86,
          "start_index": 659,
          "end_index": 663,
          "total_elevation_gain": 0,
          "average_speed": 1.52,
          "max_speed": 1.3,
          "average_heartrate": 175.2,
          "max_heartrate": 176.0,
          "lap_index": 103,
          "split": 103
      },
      {
          "id": 7951265594,
          "resource_state": 2,
          "name": "Lap 104",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 21,
          "moving_time": 21,
          "start_date": "2019-06-05T14:18:20Z",
          "start_date_local": "2019-06-05T08:18:20Z",
          "distance": 22.86,
          "start_index": 664,
          "end_index": 667,
          "total_elevation_gain": 0,
          "average_speed": 1.09,
          "max_speed": 2.1,
          "average_heartrate": 175.0,
          "max_heartrate": 176.0,
          "lap_index": 104,
          "split": 104
      },
      {
          "id": 7951265596,
          "resource_state": 2,
          "name": "Lap 105",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 13,
          "moving_time": 13,
          "start_date": "2019-06-05T14:18:54Z",
          "start_date_local": "2019-06-05T08:18:54Z",
          "distance": 22.86,
          "start_index": 668,
          "end_index": 673,
          "total_elevation_gain": 0,
          "average_speed": 1.76,
          "max_speed": 1.1,
          "average_heartrate": 177.4,
          "max_heartrate": 178.0,
          "lap_index": 105,
          "split": 105
      },
      {
          "id": 7951265598,
          "resource_state": 2,
          "name": "Lap 106",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 20,
          "moving_time": 20,
          "start_date": "2019-06-05T14:19:30Z",
          "start_date_local": "2019-06-05T08:19:30Z",
          "distance": 22.86,
          "start_index": 674,
          "end_index": 677,
          "total_elevation_gain": 0,
          "average_speed": 1.14,
          "max_speed": 1.3,
          "average_heartrate": 176.8,
          "max_heartrate": 178.0,
          "lap_index": 106,
          "split": 106
      },
      {
          "id": 7951265600,
          "resource_state": 2,
          "name": "Lap 107",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 21,
          "moving_time": 21,
          "start_date": "2019-06-05T14:20:01Z",
          "start_date_local": "2019-06-05T08:20:01Z",
          "distance": 22.86,
          "start_index": 678,
          "end_index": 684,
          "total_elevation_gain": 0,
          "average_speed": 1.09,
          "max_speed": 1.5,
          "average_heartrate": 179.2,
          "max_heartrate": 180.0,
          "lap_index": 107,
          "split": 107
      },
      {
          "id": 7951265601,
          "resource_state": 2,
          "name": "Lap 108",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 22,
          "moving_time": 22,
          "start_date": "2019-06-05T14:20:48Z",
          "start_date_local": "2019-06-05T08:20:48Z",
          "distance": 22.86,
          "start_index": 685,
          "end_index": 690,
          "total_elevation_gain": 0,
          "average_speed": 1.04,
          "max_speed": 1.3,
          "average_heartrate": 171.0,
          "max_heartrate": 180.0,
          "lap_index": 108,
          "split": 108
      },
      {
          "id": 7951265602,
          "resource_state": 2,
          "name": "Lap 109",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 25,
          "moving_time": 25,
          "start_date": "2019-06-05T14:21:31Z",
          "start_date_local": "2019-06-05T08:21:31Z",
          "distance": 22.86,
          "start_index": 691,
          "end_index": 769,
          "total_elevation_gain": 0,
          "average_speed": 0.91,
          "max_speed": 0.3,
          "average_heartrate": 134.6,
          "max_heartrate": 168.0,
          "lap_index": 109,
          "split": 109
      },
      {
          "id": 7951265604,
          "resource_state": 2,
          "name": "Lap 110",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 24,
          "moving_time": 24,
          "start_date": "2019-06-05T14:28:23Z",
          "start_date_local": "2019-06-05T08:28:23Z",
          "distance": 22.86,
          "start_index": 770,
          "end_index": 782,
          "total_elevation_gain": 0,
          "average_speed": 0.95,
          "max_speed": 0.5,
          "average_heartrate": 129.0,
          "max_heartrate": 138.0,
          "lap_index": 110,
          "split": 110
      },
      {
          "id": 7951265605,
          "resource_state": 2,
          "name": "Lap 111",
          "activity": {
              "id": 2425659209,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 12,
          "moving_time": 12,
          "start_date": "2019-06-05T14:29:42Z",
          "start_date_local": "2019-06-05T08:29:42Z",
          "distance": 22.86,
          "start_index": 783,
          "end_index": 882,
          "total_elevation_gain": 0,
          "average_speed": 1.91,
          "max_speed": 0.3,
          "average_heartrate": 116.5,
          "max_heartrate": 135.0,
          "lap_index": 111,
          "split": 111
      }
  ],
  "photos": {
      "primary": {
          "id": null,
          "unique_id": "3e5a8271-2729-4418-b7f5-5a191d47904a",
          "urls": {
              "600": "https://dgtzuqphqg23d.cloudfront.net/IMSRkzYJjCbMHGmU3l1IyTOE4QsayUGw5FUIXTJez04-768x512.jpg",
              "100": "https://dgtzuqphqg23d.cloudfront.net/IMSRkzYJjCbMHGmU3l1IyTOE4QsayUGw5FUIXTJez04-128x85.jpg"
          },
          "source": 1
      },
      "use_primary_photo": true,
      "count": 1
  },
  "device_name": "MySwimPro",
  "embed_token": "f1439225f9293e496033681f9c0c6d5927f52968",
  "available_zones": [
      "heartrate"
  ]
}, {
  "resource_state": 3,
  "athlete": {
      "id": 19812306,
      "resource_state": 1
  },
  "name": "5k on the track",
  "distance": 4993.6,
  "moving_time": 1371,
  "elapsed_time": 1371,
  "total_elevation_gain": 2.6,
  "type": "Run",
  "workout_type": 3,
  "id": 1659821302,
  "external_id": "F675A1C2-1457-4D5D-B78C-4549C04B98DA",
  "upload_id": 1782933823,
  "start_date": "2018-06-24T17:28:52Z",
  "start_date_local": "2018-06-24T11:28:52Z",
  "timezone": "(GMT-07:00) America/Denver",
  "utc_offset": -21600.0,
  "start_latlng": [
      40.177349,
      -105.117628
  ],
  "end_latlng": [
      40.17699,
      -105.116803
  ],
  "location_city": null,
  "location_state": null,
  "location_country": null,
  "start_latitude": 40.177349,
  "start_longitude": -105.117628,
  "achievement_count": 8,
  "kudos_count": 1,
  "comment_count": 0,
  "athlete_count": 1,
  "photo_count": 0,
  "map": {
      "id": "a1659821302",
      "polyline": "kcftFdxq`SVR\\DbAGxBCTIPSJSDWAk@I]QW_@MSAyAFmB@WJMNK^AVD^H\\PVTJRB^EtAC|A@NGLONe@?_@Km@MWOQKIMA[BuAAs@D]AQ@YROTI^?^F^HTTT^HrAF~@Gz@BPINOJUDU@c@Ei@OWWSYA}D@[FOLM`@Gb@?XHXLTNL\\NNBp@CfBAXDJCPINQFMDe@CiAAGKKQOYIk@EcDFSDOLQ\\GX?ZF`@NZTPRDbBAj@DbAEVMNOJUBYAc@Ga@QWQKMCy@B{BCc@BSFSVK^CX@XFVPZNLTFPBlAEf@BfACVINMHQFW?k@Gc@M[QI_@Go@@oAEy@@YDQLKPIX@~@DVRXTNRDh@Cl@BrAA\\ENIRQL[BYAe@Ga@OUUKc@Eo@DeBE_@BYJQTIXA`@@`@J\\NTTJNBl@Eb@@xBCNINOJSDW?c@G_@OYWO[EoAEwBDQFSTGRG^?NFl@JRRTRHJ@p@E`@BvBEJANMLQJ[@i@Ka@O_@IIMGk@G}@BwB@ULONGTGf@B\\J\\LTPLRFR?`DARARGNMHKJW@Q?SKq@O[[WMAs@DkC@YFURMZE^B^FTX`@PLTD|AAr@Cr@GPGNMLSDWB_@G_@S_@WQ[EsAFgA?",
      "resource_state": 3,
      "summary_polyline": "kcftFdxq`SlH{@}@oB{EFs@rAv@`BtGaAu@aCqEBeAjAf@jBbHw@k@yBwE?aAzAf@vAvGY]sCiFG}@jAl@jB~GiAm@iBgF?w@xAj@zA~G{@g@uByEIaA~@p@`CrGsAo@iByEAw@|Ar@`BlGiAo@mBcFEu@pAf@fB`Hy@q@}BaFAu@zAn@~AvGu@u@kCmEDcAvAv@dBpGiAo@qBwD@"
  },
  "trainer": false,
  "commute": false,
  "manual": false,
  "private": false,
  "visibility": "everyone",
  "flagged": false,
  "gear_id": null,
  "from_accepted_tag": false,
  "upload_id_str": "1782933823",
  "average_speed": 3.642,
  "max_speed": 4.7,
  "has_heartrate": false,
  "heartrate_opt_out": false,
  "display_hide_heartrate_option": false,
  "elev_high": 1528.2,
  "elev_low": 1525.0,
  "pr_count": 3,
  "total_photo_count": 2,
  "has_kudoed": false,
  "suffer_score": null,
  "description": "Went for speed and ended up descending each mile",
  "calories": 600.1,
  "perceived_exertion": null,
  "prefer_perceived_exertion": null,
  "segment_efforts": [
      {
          "id": 41603455219,
          "resource_state": 2,
          "name": "Everly Montgomery Track",
          "activity": {
              "id": 1659821302,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 126,
          "moving_time": 126,
          "start_date": "2018-06-24T17:29:08Z",
          "start_date_local": "2018-06-24T11:29:08Z",
          "distance": 382.5,
          "start_index": 10,
          "end_index": 135,
          "segment": {
              "id": 5882091,
              "resource_state": 2,
              "name": "Everly Montgomery Track",
              "activity_type": "Run",
              "distance": 382.5,
              "average_grade": -0.1,
              "maximum_grade": 1.0,
              "elevation_high": 1527.6,
              "elevation_low": 1526.0,
              "start_latlng": [
                  40.176919,
                  -105.117651
              ],
              "end_latlng": [
                  40.177088,
                  -105.117678
              ],
              "elevation_profile": null,
              "start_latitude": 40.176919,
              "start_longitude": -105.117651,
              "end_latitude": 40.177088,
              "end_longitude": -105.117678,
              "climb_category": 0,
              "city": "Longmont",
              "state": "CO",
              "country": "United States",
              "private": false,
              "hazardous": false,
              "starred": false
          },
          "pr_rank": null,
          "achievements": [],
          "kom_rank": null,
          "hidden": false
      },
      {
          "id": 41603455259,
          "resource_state": 2,
          "name": "Everly Montgomery Track",
          "activity": {
              "id": 1659821302,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 123,
          "moving_time": 123,
          "start_date": "2018-06-24T17:31:20Z",
          "start_date_local": "2018-06-24T11:31:20Z",
          "distance": 382.5,
          "start_index": 141,
          "end_index": 264,
          "segment": {
              "id": 5882091,
              "resource_state": 2,
              "name": "Everly Montgomery Track",
              "activity_type": "Run",
              "distance": 382.5,
              "average_grade": -0.1,
              "maximum_grade": 1.0,
              "elevation_high": 1527.6,
              "elevation_low": 1526.0,
              "start_latlng": [
                  40.176919,
                  -105.117651
              ],
              "end_latlng": [
                  40.177088,
                  -105.117678
              ],
              "elevation_profile": null,
              "start_latitude": 40.176919,
              "start_longitude": -105.117651,
              "end_latitude": 40.177088,
              "end_longitude": -105.117678,
              "climb_category": 0,
              "city": "Longmont",
              "state": "CO",
              "country": "United States",
              "private": false,
              "hazardous": false,
              "starred": false
          },
          "pr_rank": null,
          "achievements": [],
          "kom_rank": null,
          "hidden": false
      },
      {
          "id": 41603455279,
          "resource_state": 2,
          "name": "Everly Montgomery Track",
          "activity": {
              "id": 1659821302,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 122,
          "moving_time": 122,
          "start_date": "2018-06-24T17:33:28Z",
          "start_date_local": "2018-06-24T11:33:28Z",
          "distance": 382.5,
          "start_index": 269,
          "end_index": 390,
          "segment": {
              "id": 5882091,
              "resource_state": 2,
              "name": "Everly Montgomery Track",
              "activity_type": "Run",
              "distance": 382.5,
              "average_grade": -0.1,
              "maximum_grade": 1.0,
              "elevation_high": 1527.6,
              "elevation_low": 1526.0,
              "start_latlng": [
                  40.176919,
                  -105.117651
              ],
              "end_latlng": [
                  40.177088,
                  -105.117678
              ],
              "elevation_profile": null,
              "start_latitude": 40.176919,
              "start_longitude": -105.117651,
              "end_latitude": 40.177088,
              "end_longitude": -105.117678,
              "climb_category": 0,
              "city": "Longmont",
              "state": "CO",
              "country": "United States",
              "private": false,
              "hazardous": false,
              "starred": false
          },
          "pr_rank": null,
          "achievements": [],
          "kom_rank": null,
          "hidden": false
      },
      {
          "id": 41603455296,
          "resource_state": 2,
          "name": "Everly Montgomery Track",
          "activity": {
              "id": 1659821302,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 122,
          "moving_time": 122,
          "start_date": "2018-06-24T17:35:36Z",
          "start_date_local": "2018-06-24T11:35:36Z",
          "distance": 382.5,
          "start_index": 396,
          "end_index": 517,
          "segment": {
              "id": 5882091,
              "resource_state": 2,
              "name": "Everly Montgomery Track",
              "activity_type": "Run",
              "distance": 382.5,
              "average_grade": -0.1,
              "maximum_grade": 1.0,
              "elevation_high": 1527.6,
              "elevation_low": 1526.0,
              "start_latlng": [
                  40.176919,
                  -105.117651
              ],
              "end_latlng": [
                  40.177088,
                  -105.117678
              ],
              "elevation_profile": null,
              "start_latitude": 40.176919,
              "start_longitude": -105.117651,
              "end_latitude": 40.177088,
              "end_longitude": -105.117678,
              "climb_category": 0,
              "city": "Longmont",
              "state": "CO",
              "country": "United States",
              "private": false,
              "hazardous": false,
              "starred": false
          },
          "pr_rank": null,
          "achievements": [],
          "kom_rank": null,
          "hidden": false
      },
      {
          "id": 41603455310,
          "resource_state": 2,
          "name": "Everly Montgomery Track",
          "activity": {
              "id": 1659821302,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 120,
          "moving_time": 120,
          "start_date": "2018-06-24T17:37:43Z",
          "start_date_local": "2018-06-24T11:37:43Z",
          "distance": 382.5,
          "start_index": 522,
          "end_index": 640,
          "segment": {
              "id": 5882091,
              "resource_state": 2,
              "name": "Everly Montgomery Track",
              "activity_type": "Run",
              "distance": 382.5,
              "average_grade": -0.1,
              "maximum_grade": 1.0,
              "elevation_high": 1527.6,
              "elevation_low": 1526.0,
              "start_latlng": [
                  40.176919,
                  -105.117651
              ],
              "end_latlng": [
                  40.177088,
                  -105.117678
              ],
              "elevation_profile": null,
              "start_latitude": 40.176919,
              "start_longitude": -105.117651,
              "end_latitude": 40.177088,
              "end_longitude": -105.117678,
              "climb_category": 0,
              "city": "Longmont",
              "state": "CO",
              "country": "United States",
              "private": false,
              "hazardous": false,
              "starred": false
          },
          "pr_rank": 3,
          "achievements": [
              {
                  "type_id": 3,
                  "type": "pr",
                  "rank": 3
              }
          ],
          "kom_rank": null,
          "hidden": false
      },
      {
          "id": 41603455329,
          "resource_state": 2,
          "name": "Everly Montgomery Track",
          "activity": {
              "id": 1659821302,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 124,
          "moving_time": 124,
          "start_date": "2018-06-24T17:39:48Z",
          "start_date_local": "2018-06-24T11:39:48Z",
          "distance": 382.5,
          "start_index": 645,
          "end_index": 767,
          "segment": {
              "id": 5882091,
              "resource_state": 2,
              "name": "Everly Montgomery Track",
              "activity_type": "Run",
              "distance": 382.5,
              "average_grade": -0.1,
              "maximum_grade": 1.0,
              "elevation_high": 1527.6,
              "elevation_low": 1526.0,
              "start_latlng": [
                  40.176919,
                  -105.117651
              ],
              "end_latlng": [
                  40.177088,
                  -105.117678
              ],
              "elevation_profile": null,
              "start_latitude": 40.176919,
              "start_longitude": -105.117651,
              "end_latitude": 40.177088,
              "end_longitude": -105.117678,
              "climb_category": 0,
              "city": "Longmont",
              "state": "CO",
              "country": "United States",
              "private": false,
              "hazardous": false,
              "starred": false
          },
          "pr_rank": null,
          "achievements": [],
          "kom_rank": null,
          "hidden": false
      },
      {
          "id": 41603455363,
          "resource_state": 2,
          "name": "Everly Montgomery Track",
          "activity": {
              "id": 1659821302,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 128,
          "moving_time": 128,
          "start_date": "2018-06-24T17:41:58Z",
          "start_date_local": "2018-06-24T11:41:58Z",
          "distance": 382.5,
          "start_index": 773,
          "end_index": 895,
          "segment": {
              "id": 5882091,
              "resource_state": 2,
              "name": "Everly Montgomery Track",
              "activity_type": "Run",
              "distance": 382.5,
              "average_grade": -0.1,
              "maximum_grade": 1.0,
              "elevation_high": 1527.6,
              "elevation_low": 1526.0,
              "start_latlng": [
                  40.176919,
                  -105.117651
              ],
              "end_latlng": [
                  40.177088,
                  -105.117678
              ],
              "elevation_profile": null,
              "start_latitude": 40.176919,
              "start_longitude": -105.117651,
              "end_latitude": 40.177088,
              "end_longitude": -105.117678,
              "climb_category": 0,
              "city": "Longmont",
              "state": "CO",
              "country": "United States",
              "private": false,
              "hazardous": false,
              "starred": false
          },
          "pr_rank": null,
          "achievements": [],
          "kom_rank": null,
          "hidden": false
      },
      {
          "id": 41603455390,
          "resource_state": 2,
          "name": "Everly Montgomery Track",
          "activity": {
              "id": 1659821302,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 122,
          "moving_time": 122,
          "start_date": "2018-06-24T17:44:12Z",
          "start_date_local": "2018-06-24T11:44:12Z",
          "distance": 382.5,
          "start_index": 901,
          "end_index": 1022,
          "segment": {
              "id": 5882091,
              "resource_state": 2,
              "name": "Everly Montgomery Track",
              "activity_type": "Run",
              "distance": 382.5,
              "average_grade": -0.1,
              "maximum_grade": 1.0,
              "elevation_high": 1527.6,
              "elevation_low": 1526.0,
              "start_latlng": [
                  40.176919,
                  -105.117651
              ],
              "end_latlng": [
                  40.177088,
                  -105.117678
              ],
              "elevation_profile": null,
              "start_latitude": 40.176919,
              "start_longitude": -105.117651,
              "end_latitude": 40.177088,
              "end_longitude": -105.117678,
              "climb_category": 0,
              "city": "Longmont",
              "state": "CO",
              "country": "United States",
              "private": false,
              "hazardous": false,
              "starred": false
          },
          "pr_rank": null,
          "achievements": [],
          "kom_rank": null,
          "hidden": false
      },
      {
          "id": 41603455996,
          "resource_state": 2,
          "name": "Everly Montgomery Track",
          "activity": {
              "id": 1659821302,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 119,
          "moving_time": 119,
          "start_date": "2018-06-24T17:46:20Z",
          "start_date_local": "2018-06-24T11:46:20Z",
          "distance": 382.5,
          "start_index": 1028,
          "end_index": 1147,
          "segment": {
              "id": 5882091,
              "resource_state": 2,
              "name": "Everly Montgomery Track",
              "activity_type": "Run",
              "distance": 382.5,
              "average_grade": -0.1,
              "maximum_grade": 1.0,
              "elevation_high": 1527.6,
              "elevation_low": 1526.0,
              "start_latlng": [
                  40.176919,
                  -105.117651
              ],
              "end_latlng": [
                  40.177088,
                  -105.117678
              ],
              "elevation_profile": null,
              "start_latitude": 40.176919,
              "start_longitude": -105.117651,
              "end_latitude": 40.177088,
              "end_longitude": -105.117678,
              "climb_category": 0,
              "city": "Longmont",
              "state": "CO",
              "country": "United States",
              "private": false,
              "hazardous": false,
              "starred": false
          },
          "pr_rank": 2,
          "achievements": [
              {
                  "type_id": 3,
                  "type": "pr",
                  "rank": 2
              }
          ],
          "kom_rank": null,
          "hidden": false
      },
      {
          "id": 41603456014,
          "resource_state": 2,
          "name": "Everly Montgomery Track",
          "activity": {
              "id": 1659821302,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 116,
          "moving_time": 116,
          "start_date": "2018-06-24T17:48:24Z",
          "start_date_local": "2018-06-24T11:48:24Z",
          "distance": 382.5,
          "start_index": 1152,
          "end_index": 1268,
          "segment": {
              "id": 5882091,
              "resource_state": 2,
              "name": "Everly Montgomery Track",
              "activity_type": "Run",
              "distance": 382.5,
              "average_grade": -0.1,
              "maximum_grade": 1.0,
              "elevation_high": 1527.6,
              "elevation_low": 1526.0,
              "start_latlng": [
                  40.176919,
                  -105.117651
              ],
              "end_latlng": [
                  40.177088,
                  -105.117678
              ],
              "elevation_profile": null,
              "start_latitude": 40.176919,
              "start_longitude": -105.117651,
              "end_latitude": 40.177088,
              "end_longitude": -105.117678,
              "climb_category": 0,
              "city": "Longmont",
              "state": "CO",
              "country": "United States",
              "private": false,
              "hazardous": false,
              "starred": false
          },
          "pr_rank": 1,
          "achievements": [
              {
                  "type_id": 3,
                  "type": "pr",
                  "rank": 1
              }
          ],
          "kom_rank": null,
          "hidden": false
      }
  ],
  "splits_metric": [
      {
          "distance": 1000.1,
          "elapsed_time": 284,
          "elevation_difference": -0.1,
          "moving_time": 284,
          "split": 1,
          "average_speed": 3.52,
          "average_grade_adjusted_speed": 3.53,
          "pace_zone": 0
      },
      {
          "distance": 1000.2,
          "elapsed_time": 272,
          "elevation_difference": 0.0,
          "moving_time": 272,
          "split": 2,
          "average_speed": 3.68,
          "average_grade_adjusted_speed": 3.69,
          "pace_zone": 0
      },
      {
          "distance": 1001.6,
          "elapsed_time": 276,
          "elevation_difference": 2.2,
          "moving_time": 276,
          "split": 3,
          "average_speed": 3.63,
          "average_grade_adjusted_speed": 3.65,
          "pace_zone": 0
      },
      {
          "distance": 1000.6,
          "elapsed_time": 279,
          "elevation_difference": -0.2,
          "moving_time": 279,
          "split": 4,
          "average_speed": 3.59,
          "average_grade_adjusted_speed": 3.59,
          "pace_zone": 0
      },
      {
          "distance": 991.1,
          "elapsed_time": 260,
          "elevation_difference": 0.0,
          "moving_time": 260,
          "split": 5,
          "average_speed": 3.81,
          "average_grade_adjusted_speed": 3.82,
          "pace_zone": 0
      }
  ],
  "splits_standard": [
      {
          "distance": 1612.6,
          "elapsed_time": 452,
          "elevation_difference": 0.1,
          "moving_time": 452,
          "split": 1,
          "average_speed": 3.57,
          "average_grade_adjusted_speed": 3.58,
          "pace_zone": 0
      },
      {
          "distance": 1608.2,
          "elapsed_time": 443,
          "elevation_difference": 1.9,
          "moving_time": 443,
          "split": 2,
          "average_speed": 3.63,
          "average_grade_adjusted_speed": 3.65,
          "pace_zone": 0
      },
      {
          "distance": 1609.3,
          "elapsed_time": 435,
          "elevation_difference": 0.2,
          "moving_time": 435,
          "split": 3,
          "average_speed": 3.7,
          "average_grade_adjusted_speed": 3.71,
          "pace_zone": 0
      },
      {
          "distance": 163.5,
          "elapsed_time": 41,
          "elevation_difference": -0.3,
          "moving_time": 41,
          "split": 4,
          "average_speed": 3.99,
          "average_grade_adjusted_speed": 3.98,
          "pace_zone": 0
      }
  ],
  "laps": [
      {
          "id": 5342226801,
          "resource_state": 2,
          "name": "Lap 1",
          "activity": {
              "id": 1659821302,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 1371,
          "moving_time": 1371,
          "start_date": "2018-06-24T17:28:52Z",
          "start_date_local": "2018-06-24T11:28:52Z",
          "distance": 4993.6,
          "start_index": 0,
          "end_index": 1351,
          "total_elevation_gain": 3.2,
          "average_speed": 3.64,
          "max_speed": 4.7,
          "lap_index": 1,
          "split": 1,
          "pace_zone": 0
      }
  ],
  "best_efforts": [
      {
          "id": 3573774462,
          "resource_state": 2,
          "name": "400m",
          "activity": {
              "id": 1659821302,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 103,
          "moving_time": 104,
          "start_date": "2018-06-24T17:47:54Z",
          "start_date_local": "2018-06-24T11:47:54Z",
          "distance": 400,
          "start_index": 1122,
          "end_index": 1226,
          "pr_rank": 3,
          "achievements": [
              {
                  "type_id": 3,
                  "type": "pr",
                  "rank": 3
              }
          ]
      },
      {
          "id": 3573774465,
          "resource_state": 2,
          "name": "1/2 mile",
          "activity": {
              "id": 1659821302,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 210,
          "moving_time": 211,
          "start_date": "2018-06-24T17:46:42Z",
          "start_date_local": "2018-06-24T11:46:42Z",
          "distance": 805,
          "start_index": 1050,
          "end_index": 1261,
          "pr_rank": 2,
          "achievements": [
              {
                  "type_id": 3,
                  "type": "pr",
                  "rank": 2
              }
          ]
      },
      {
          "id": 3573774467,
          "resource_state": 2,
          "name": "1k",
          "activity": {
              "id": 1659821302,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 262,
          "moving_time": 263,
          "start_date": "2018-06-24T17:47:06Z",
          "start_date_local": "2018-06-24T11:47:06Z",
          "distance": 1000,
          "start_index": 1074,
          "end_index": 1337,
          "pr_rank": 2,
          "achievements": [
              {
                  "type_id": 3,
                  "type": "pr",
                  "rank": 2
              }
          ]
      },
      {
          "id": 3573774469,
          "resource_state": 2,
          "name": "1 mile",
          "activity": {
              "id": 1659821302,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 426,
          "moving_time": 427,
          "start_date": "2018-06-24T17:44:36Z",
          "start_date_local": "2018-06-24T11:44:36Z",
          "distance": 1609,
          "start_index": 925,
          "end_index": 1351,
          "pr_rank": 1,
          "achievements": [
              {
                  "type_id": 3,
                  "type": "pr",
                  "rank": 1
              }
          ]
      },
      {
          "id": 3573774470,
          "resource_state": 2,
          "name": "2 mile",
          "activity": {
              "id": 1659821302,
              "resource_state": 1
          },
          "athlete": {
              "id": 19812306,
              "resource_state": 1
          },
          "elapsed_time": 875,
          "moving_time": 876,
          "start_date": "2018-06-24T17:35:02Z",
          "start_date_local": "2018-06-24T11:35:02Z",
          "distance": 3219,
          "start_index": 362,
          "end_index": 1226,
          "pr_rank": 1,
          "achievements": [
              {
                  "type_id": 3,
                  "type": "pr",
                  "rank": 1
              }
          ]
      }
  ],
  "photos": {
      "primary": {
          "id": null,
          "unique_id": "D49C64FA-C2D9-4FFE-A564-9A40558EE169",
          "urls": {
              "600": "https://dgtzuqphqg23d.cloudfront.net/CWUGh1MDQYxJXJ6F2b9TRCIp7nE-cDx4VeiUqsADZ1s-576x768.jpg",
              "100": "https://dgtzuqphqg23d.cloudfront.net/CWUGh1MDQYxJXJ6F2b9TRCIp7nE-cDx4VeiUqsADZ1s-96x128.jpg"
          },
          "source": 1
      },
      "use_primary_photo": true,
      "count": 2
  },
  "device_name": "Strava iPhone App",
  "embed_token": "2882866e5763faba8c66e021f835748eec3709d2",
  "similar_activities": {
      "effort_count": 1,
      "average_speed": 3.6423049581737783,
      "min_average_speed": 3.6423049581737783,
      "mid_average_speed": 3.6423049581737783,
      "max_average_speed": 3.6423049581737783,
      "pr_rank": null,
      "frequency_milestone": null,
      "trend": {
          "speeds": [
              3.6423049581737783
          ],
          "current_activity_index": 0,
          "min_speed": 3.6423049581737783,
          "mid_speed": 3.6423049581737783,
          "max_speed": 3.6423049581737783,
          "direction": 0
      },
      "resource_state": 2
  },
  "available_zones": [
      "pace"
  ]
}]

export default topActivities;