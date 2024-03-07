
--
-- Database: `db_contact`
--

CREATE DATABASE IF NOT EXISTS 'db_songhai' DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE 'db_songhai';

-- --------------------------------------------------------

--
-- Table structure for table `tbl_contact`
--

DROP TABLE IF EXISTS 'tbl_test';
CREATE TABLE 'tbl_test' (
  'fldPhone' int(15) NOT NULL,
  'fldName' varchar(60) NOT NULL,
  'fldEmail' varchar(50) NOT NULL,
  'fldMessage' text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_contact`
--
ALTER TABLE 'tbl_test'
 ADD PRIMARY KEY ('fldPhone');

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_contact`
--
ALTER TABLE 'tbl_test'
MODIFY 'fldPhone' int(15) NOT NULL AUTO_INCREMENT;
