window.BENCHMARK_DATA = {
  "lastUpdate": 1716377791906,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "alexpax@amazon.co.uk",
            "name": "Alessandro Passaro",
            "username": "passaro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2767c856d96984a523aad6a92f0f322e461ccdaf",
          "message": "Adopt new async write API for PutObject requests (#832)\n\n* Add failing test for concurrent put_objects\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Add failing test for multiple files open for write\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Adopt async write API to feed data into a PutObject request\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Wait for CreateMultiPartUpload\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* FutureVoid wrapper\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Ensure a MetaRequestWrite holds exclusive access to the meta-request until completion\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Rename on_telemetry callback (in mountpoint-s3-client)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Rename callbacks on_request_finish/on_meta_request_finish\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Use RequestMetric::error()\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Comments\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-04-10T14:06:53Z",
          "tree_id": "9fe356ae5937e9d7ebe2ea077ac8085470ac5f1e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2767c856d96984a523aad6a92f0f322e461ccdaf"
        },
        "date": 1712764980959,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 80.59814453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 110.85751953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 78.48017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 141.28759765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 19.50595703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 26.73515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 18.8376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 26.76875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5589.89375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 412.79091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 130.86123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 174.75673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1856.4626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 96.1056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1393.81728515625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1237.4697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 102.469921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1286.851953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 891.59765625,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bornholt@amazon.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4cd3cd57557ed6c825a6108735a312a85dcf2221",
          "message": "Remove fuse_tests from asan (#844)\n\nThey frequently trigger a deadlock inside ASan's allocator. We're really\r\nusing ASan to test the CRT bindings anyway, so the S3 tests are really\r\nwhat matter most.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-04-10T15:01:38-05:00",
          "tree_id": "50df3f85bdda712eb393abe4ed237640cccc3fc6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4cd3cd57557ed6c825a6108735a312a85dcf2221"
        },
        "date": 1712785476719,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 79.63818359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 109.85966796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 77.32626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 139.51142578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 19.33955078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 26.8673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 18.50654296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 26.108984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5559.90419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 404.95009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 134.13583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 165.8248046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1876.776171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 103.88115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1620.27001953125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1210.32900390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 98.1845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1142.63193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 845.9517578125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alexpax@amazon.co.uk",
            "name": "Alessandro Passaro",
            "username": "passaro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9803ca56d6185e38d10c7590b5c6f08cac18da51",
          "message": "Publish new crate versions (#843)\n\n* Publish new crate versions\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Increment mountpoint-s3-crt* to v0.7.0\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-04-10T22:28:41Z",
          "tree_id": "a116d4cebe7db19caf421e92ef1106cd05fa9a1f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9803ca56d6185e38d10c7590b5c6f08cac18da51"
        },
        "date": 1712795173235,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 81.56943359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 112.13212890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 80.1123046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 142.0833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 19.56650390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 27.28095703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 19.91689453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 27.3955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5517.689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 419.04296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 123.74482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 170.39208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1787.005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 97.3228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1466.2130859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1252.47197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 102.7373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1386.1361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 840.026953125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bornholt@amazon.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1496c13f2078b9b5803d833161139b5600c0ace9",
          "message": " First pass at randomized testing for POSIX semantics (#842)\n\n* Don't use AutoUnmount in FUSE integration tests\n\nIt's the wrong thing to do: the FUSE session is unmounted automatically\nwhen the BackgroundSession drops. AutoUnmount is for the case when the\nmounting process might not unmount on its own, but we always do. Using\nthe option spawns a new thread and leaks a socket until the end of the\nprocess, which means our test processes can run out of open file\ndescriptors if they run many FUSE sessions.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* First pass at randomized testing for POSIX semantics\n\nThe idea is to randomly run real system calls against both a real file\nsystem (a temporary directory on the OS disk) and Mountpoint. We expect\nMountpoint to allow fewer behaviors than a real POSIX file system (e.g.\ncan't read and write the same file handle), so we need some logic for\nallowing a limited set of divergences between the two systems.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-04-11T02:03:59Z",
          "tree_id": "7f275c15f402814085f71198bbad49d9f4b02a13",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1496c13f2078b9b5803d833161139b5600c0ace9"
        },
        "date": 1712808013111,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 80.75849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 111.19150390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 78.37578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 139.56513671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 19.5416015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 27.51064453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 19.07158203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 26.74833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5528.2068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 408.526953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 135.4908203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 170.0470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1784.01484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 95.371484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1532.2060546875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1229.500390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 103.57333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1230.240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 801.63828125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alexpax@amazon.co.uk",
            "name": "Alessandro Passaro",
            "username": "passaro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "29cf8daf8f87aa216e5064c4b1a5fdd46009c164",
          "message": "Improve cancellation test for PutObject write (#845)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-04-11T11:07:27Z",
          "tree_id": "54dff8c2afb3a209cd9879da719589500a6cbd19",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/29cf8daf8f87aa216e5064c4b1a5fdd46009c164"
        },
        "date": 1712840404788,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 79.46962890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 109.65478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 76.96015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 138.33623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 19.4814453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 26.64443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 18.19375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 26.10029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5603.425,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 407.06640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 140.27431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 169.97744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1952.2470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 96.09716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1510.4310546875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1449.166015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 103.062109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1468.4798828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 827.42919921875,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vladvolodkin@gmail.com",
            "name": "Volodkin Vladislav",
            "username": "vladem"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ad0f53058710f77d2fc7d64cd7820cfde8847a81",
          "message": "Release v1.6.0 (#848)\n\n* Release v1.6.0\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Add other changes, fix header\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2024-04-11T15:49:41Z",
          "tree_id": "9beee3898632bc67ef7e62418873d77034912b55",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ad0f53058710f77d2fc7d64cd7820cfde8847a81"
        },
        "date": 1712857612759,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 82.48076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 112.13681640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 79.9505859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 142.728515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 20.012890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 27.52724609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 19.183203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 27.6064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5597.7568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 414.99140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 141.5546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 169.355078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1763.41640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 101.311328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1465.29736328125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1315.94619140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 105.572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1406.7865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 830.361328125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nairashwin952013@gmail.com",
            "name": "Ashwin Nair",
            "username": "indianwhocodes"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2393b96acf0773a9b11b4b1c34e80538d83ff9e8",
          "message": "S3_ENDPOINT_URL configurable for mountpoint benchmarks (#821)\n\nSigned-off-by: indianwhocodes <nairashwin952013@gmail.com>",
          "timestamp": "2024-04-12T08:40:59Z",
          "tree_id": "a111f1d51e2e3048b2ebba68a77426894c6f9536",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2393b96acf0773a9b11b4b1c34e80538d83ff9e8"
        },
        "date": 1712917952371,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 81.4376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 111.77900390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 77.1943359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 141.24892578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 19.63017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 27.26943359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 17.84814453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 26.73681640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5477.00126953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 411.9279296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 145.50302734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 172.46748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1723.91357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 96.46865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1516.71650390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1241.3482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 105.47392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1136.17587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 812.870703125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bornholt@amazon.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "620f8407b1f603ace6e5a6a6defe4304419a43a4",
          "message": "Update Rust SDK (#856)\n\nThe SDK supports Express One Zone, so we can remove our workarounds.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-04-19T01:36:38Z",
          "tree_id": "bf67ddfcc5ba363204a291d0ea34777476c7bfc5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/620f8407b1f603ace6e5a6a6defe4304419a43a4"
        },
        "date": 1713497354866,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 81.11005859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 111.64951171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 77.2505859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 141.6626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 19.486328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 27.14501953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 18.5560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 27.108984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5557.07998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 418.28603515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 135.65400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 170.2267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1864.86748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 102.82431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1417.64052734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1413.86904296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 101.601953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1203.0037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 845.59736328125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "monthonk@amazon.com",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bc1a7cb7574e6f3596b96705fb0f5e0f0ca100da",
          "message": "Avoid creating a new rule engine for every endpoint resolution (#860)\n\n* Avoid creating a new rule engine for every endpoint resolution\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Use static rule engine for all endpoint configs\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-04-23T14:59:43Z",
          "tree_id": "583385e18301587c51b8257fd655e5b11f6dddca",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/bc1a7cb7574e6f3596b96705fb0f5e0f0ca100da"
        },
        "date": 1713891373771,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 97.8818359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 136.37783203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 94.6052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 168.70283203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 23.95478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 32.70634765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.402734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 31.7169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5556.28544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 456.48251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 141.969140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 200.92080078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1787.94091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 107.42900390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1462.57705078125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1218.370703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 115.54951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1150.0259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 814.826171875,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vladvolodkin@gmail.com",
            "name": "Volodkin Vladislav",
            "username": "vladem"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1204aed8494cbe78dc6b0c9828d2c7d5143e6afe",
          "message": "Allow building on 32-bit platforms (#852)\n\n* Allow building on 32bit platforms\n\nSigned-off-by: Vladislav Volodkin <vladvolodkin@gmail.com>\n\n* Fix style\n\nSigned-off-by: Vladislav Volodkin <vladvolodkin@gmail.com>\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vladvolodkin@gmail.com>",
          "timestamp": "2024-04-24T03:23:41Z",
          "tree_id": "3b82167c691b85891b490fc629eb0d59572157a1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1204aed8494cbe78dc6b0c9828d2c7d5143e6afe"
        },
        "date": 1713935978245,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 98.503125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 136.56162109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 94.0603515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 169.54140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 23.3912109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.923828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.24052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 31.79052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5553.51435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 455.11533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 150.3546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 201.8099609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1892.17294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 105.50712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1432.50751953125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1214.93056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 114.57021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1301.84130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 817.44169921875,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bornholt@amazon.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9d26b113f6acd205b58d0ad97841d7d5bbca3d04",
          "message": " Add option to disable trailing checksums for uploads (#849)\n\n* Add option to disable trailing checksums for uploads\n\nSome S3 implementations (notably S3 on Outposts) don't support trailing\nchecksums, which causes uploads to fail. Add a new command-line flag to\ndisable trailing checksums for uploads. Most of the work here is just\nadding rudimentary GetObjectAttributes support to the MockClient so we\ncan test this change.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Automatically disable checksums on S3 on Outposts\n\nI refactored our personality detection a little to track the various\n\"quirks\" of each S3 implementation. I also added new tests to make sure\nchecksums are still enabled by default. This test probably fails when\ntargeting an Outposts bucket, but we can cross that bridge if we ever\nstart running CI against Outposts.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Validate part checksums without sending them to S3\n\nEven if we can't send the headers to S3, we should still retain them for\nour own internal checks. This change adopts a new CRT ability to\ndecouple upload review checksums from the actual S3 headers, so that we\ncan still validate upload checksums locally without sending them to S3.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Move tokio_block_on\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* PR feedback\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Change CLI flag to be an argument\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* I totally made this up.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Changelogs\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Fix comment on presence of checksums in GetObjectAttributes\n\nSigned-off-by: Daniel Carl Jones <danny@danielcarl.info>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\nSigned-off-by: Daniel Carl Jones <danny@danielcarl.info>\nCo-authored-by: Daniel Carl Jones <danny@danielcarl.info>",
          "timestamp": "2024-04-24T16:02:55Z",
          "tree_id": "4eff70bdaf4b78132388270009695e17b420e335",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9d26b113f6acd205b58d0ad97841d7d5bbca3d04"
        },
        "date": 1713981370506,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 99.3162109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 136.52265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 94.914453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 169.52783203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 23.32001953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 32.6517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.35458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 31.80244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5519.703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 462.28671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 144.6287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 199.35625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1910.19013671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 106.66513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1423.38466796875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1366.55927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 112.22783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1088.9599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 838.03662109375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alexpax@amazon.co.uk",
            "name": "Alessandro Passaro",
            "username": "passaro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e32f89013ad0e8b5a6ad5c0bb2295a977d1ed808",
          "message": "Allow --metadata-ttl without --cache and set default with --cache to 60s (#855)\n\n* Allow --metadata-ttl without --cache and set default with --cache to 60s\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* PR feedback\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Show 0 TTL warning in background mode\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Update docs and changelog\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Colorize warning with owo_colors\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Break items in the changelog\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-05-01T16:01:38Z",
          "tree_id": "a299824b9ac8213d6ce31e1a9ea5cea9fb76646e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e32f89013ad0e8b5a6ad5c0bb2295a977d1ed808"
        },
        "date": 1714586193805,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 96.14326171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 134.00517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 90.0291015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 165.57958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 22.8896484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 32.0267578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 20.5658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 30.92333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5606.72568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 454.0548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 152.877734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 201.91611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1947.35849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 104.41640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1500.109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1269.74052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 112.75224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1223.55595703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 879.16982421875,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alexpax@amazon.co.uk",
            "name": "Alessandro Passaro",
            "username": "passaro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9d22f1f77f232baba714e5775bdef171d77e71d9",
          "message": "Resolve clippy errors introduced in Rust 1.78.0 (#865)\n\nAddress 2 issues:\n\n* Assigning clones (https://rust-lang.github.io/rust-clippy/master/index.html#/assigning_clones)\n  Use `clone_into()` instead of assigning the result of `ToOwned::to_owned()` or `Clone::clone()`.\n\n* Remove the unused `mountpoint-s3-client::util::PtrExt`\n  Redundant. Similar functionality now in `mountpoint-s3-crt::CrtError`.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-05-03T17:13:42Z",
          "tree_id": "3d891a15e62bd1fe4a4287c3b98a84029dfdb632",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9d22f1f77f232baba714e5775bdef171d77e71d9"
        },
        "date": 1714763469707,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 97.91240234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 136.985546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 91.79931640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 168.94013671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 23.98466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 32.68125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 21.41142578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 31.628515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5310.1810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 456.05263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 130.25673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 201.3435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1900.626171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 107.69423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1508.179296875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1385.63876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 109.95185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1101.6494140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 824.195703125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "paulo.miguel.almeida.rodenas@gmail.com",
            "name": "Paulo Miguel Almeida",
            "username": "PauloMigAlmeida"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b44369dcf17b2c4e1e2db8d71e3a00eeddbaf960",
          "message": "reutilise reference across validate_mountpoint function (#868)\n\npath.as_ref() was being called multiple times unnecessarely\n\nSigned-off-by: Paulo Miguel Almeida <paulo.miguel.almeida.rodenas@gmail.com>",
          "timestamp": "2024-05-06T05:50:19Z",
          "tree_id": "9b84ac53dc325a0d58ae6affb463c8a29eb1272b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b44369dcf17b2c4e1e2db8d71e3a00eeddbaf960"
        },
        "date": 1714981538723,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 97.30322265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 135.21474609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 91.3337890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 168.21259765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 23.92392578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 32.36630859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 20.78818359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.3767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5639.85146484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 455.431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 143.07744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 199.63291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1780.69453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 104.13818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1600.7013671875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1271.14755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 112.82431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1244.244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 820.1015625,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alexpax@amazon.co.uk",
            "name": "Alessandro Passaro",
            "username": "passaro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a2d0af6da2f613fe7e8d1e67472cb5a620e28f12",
          "message": "Update cargo dependencies (#873)\n\nRun `cargo update` and explicitly set required features for the `nix` crate.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-05-09T22:09:31Z",
          "tree_id": "3bcfecd973d79784f8aabe313bf3d1d623919fee",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a2d0af6da2f613fe7e8d1e67472cb5a620e28f12"
        },
        "date": 1715299328696,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 95.943359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 133.4935546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 90.5349609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 166.79892578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 22.78203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.1830078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 20.90771484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.12353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5544.99130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 455.39619140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 151.01845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 195.52783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2025.1052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 114.953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1571.51357421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1379.8955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 115.11748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1236.47998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 915.35927734375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "monthonk@amazon.com",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd9b1af33128f235b26bbeaee5c586d22de748e2",
          "message": "Update CRT submodules to latest releases (#875)\n\n* Update CRT submodules to latest releases\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Exclude more unused files to keep crate size under limit\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-05-10T13:12:50Z",
          "tree_id": "eb8e685e5382c173e773e27da777a20befe81398",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/bd9b1af33128f235b26bbeaee5c586d22de748e2"
        },
        "date": 1715353804134,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 96.81748046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 134.378125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 93.72109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 168.2275390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 23.29443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 32.179296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.50673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 31.0046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5562.7951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 450.958203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 141.305078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 199.59306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1827.355078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 104.44306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1432.47685546875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1308.33447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 108.72900390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1058.3814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 895.46552734375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alexpax@amazon.co.uk",
            "name": "Alessandro Passaro",
            "username": "passaro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "50720ab30b852929d2ab73810ac7806623d9c21c",
          "message": "Update CRT submodules to latest releases (#877)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-05-13T16:58:41Z",
          "tree_id": "afde2e462a548e5e0cc2996bcc54290f3473cc05",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/50720ab30b852929d2ab73810ac7806623d9c21c"
        },
        "date": 1715626318356,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 98.98935546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 134.630859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 92.36904296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 167.2255859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 23.62978515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 32.376171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 21.40263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 31.20400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5585.0779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 450.19560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 154.90693359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 201.52099609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1909.38251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 105.3341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1490.73662109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1269.9138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 111.77841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1568.8625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 969.26787109375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alexpax@amazon.co.uk",
            "name": "Alessandro Passaro",
            "username": "passaro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2a3a06f466c6bf4ab2e830e37ff2a5589bc28b7f",
          "message": "Adopt polling API for uploading data in PutObject requests (#874)\n\n* Adopt polling API for uploading data\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Detect incomplete writes\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Improve comments\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Update `MetaRequestWrite` rustdocs\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Fix `total_bytes` calculation and expand comments\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Remove unnecessary lifetime constraint\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2024-05-14T19:14:34Z",
          "tree_id": "f56e2ae926b8ba9cd63ab39f3dda84b4371589ec",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2a3a06f466c6bf4ab2e830e37ff2a5589bc28b7f"
        },
        "date": 1715720875648,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 95.253125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 132.50087890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 91.69482421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 165.45751953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 22.72255859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 31.8857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 21.77763671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 30.73583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5619.60966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 451.9224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 141.87529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 198.771484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1738.9140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 109.4521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1445.773046875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1222.18447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 110.7548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1499.97998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 967.2009765625,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "monthonk@amazon.com",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8c3e18e80a2fa1ee53eaf5cb5c286d003609683c",
          "message": "Use separate bench buckets in the ci (#881)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-05-20T10:14:21Z",
          "tree_id": "bc4d8c12201d3e9d7637b4499e67cf559cbb98e8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8c3e18e80a2fa1ee53eaf5cb5c286d003609683c"
        },
        "date": 1716223458641,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 92.9130859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 136.56337890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 88.5341796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 168.75498046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 22.48203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.191796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 21.1439453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.1580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5544.28828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 453.20185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 133.701953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 199.02216796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1697.80078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 107.55810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1415.7048828125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1267.407421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 117.5642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1907.7603515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1094.195703125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "monthonk@amazon.com",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e6a01e14c44d9cf35298124a704ecb332282fab3",
          "message": "Use separate IAM role for the bench CI (#883)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-05-22T09:42:37Z",
          "tree_id": "c0dc51f41b7a96da923f8cbafc2153dce45f0858",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e6a01e14c44d9cf35298124a704ecb332282fab3"
        },
        "date": 1716377791386,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 98.41201171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 136.687109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 92.68837890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 169.166015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 23.86279296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.04228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 21.57001953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.39501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5558.19443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 453.39140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 140.26103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 204.413671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1616.85419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 113.4849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1444.51630859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1257.80146484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 113.17724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1420.20078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1005.68837890625,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  }
}