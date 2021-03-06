---
title: AWS Cloud Practitioner 자격증 공부 -2
date: "2020-04-11T23:46:37.121Z"
template: "post"
draft: false
slug: "AWS_Cloud_Practitioner_2"
category: "AWS"
tags:
  - "AWS"
  - "Cloud Practitioner"
  - "Certificate"
description: "저번 포스팅에 이어 오늘은 Module 2를 정리한다!"
---

<br/>

저번 포스팅에 이어 오늘은 Module 2를 정리한다!

---

* **Module 2**
  * AWS 플랫폼의 주요 서비스 및 관련 일반 사용 사례를 설명

---

### Amazon Elastic Cloud Compute (EC2)

<br/>

**Elastic(탄력적)** : 올바르게 구성된 경우 APP의 현재 요구 사항에 따라 해당 APP에 필요한 **서버의 양을 자동으로 늘리거나 줄일 수 있는 것**을 의미한다.<br/>

**Cloud** : 클라우드에서 호스팅 되는 컴퓨팅 리소스라는 사실을 나타낸다.<br/>

**Compute** : 표시되고 있는 컴퓨팅 또는 서버 리소스를 나타낸다.<br/>

인스턴스는 사용량에 따라 요금을 지불한다.<br/>
즉, **인스턴스를 실행한 시간만큼 요금을 지불**하는 방식이다.

<br/>

### Amazon Elastic Block Store (EBS)

<br/>

EBS 볼륨은 Amazon **EC2 인스턴스의 스토리지 단위**로 사용될 수 있다.<br/>

사용한 만큼만 지불할 수 있고, 볼륨이 더 이상 필요하지 않을 때마다 이를 삭제하여 요금을 지불하지 않을 수 있다.<br/>

EBS 볼륨은 **안정성과 가용성을 목표**로 설계됨.

<br/>

* Amazon EBS의 기능
	* 마그네틱 또는 SSD 중에서 선택 가능
	* 보다 높은 수준의 데이터 내구성을 제공하기 위해 볼륨의 특정 시점 스냅샷을 생성하는 기능을 제공
	* AWS를 사용하면 언제든지 스냅샷에서 새 볼륨을 다시 생성 가능

<br/>

**추가 비용 없이 EBS 볼륨을 암호화**할 수 있다.

<br/>

### Amazon S3 (Simple Storage Service)

<br/>

**데이터를 저장하고 검색할 수 있는 간단한 API를 제공하는 완전 관리형 스토리지 서비스**<br/>

즉, S3에 저장하는 데이터는 특정 서버와 관련이 없으므로 **사용자가 인프라를 직접 관리할 필요가 없다.**<br/>

<br/>

* Amazon S3의 기능
	* S3 객체를 원하는 만큼 추가할 수 있다. (**객체는** 이미지, 동영상 또는 서버 로그와 같은 **거의 모든 데이터 파일**)
	* HTTP or HTTPS를 통해 인터넷에서 데이터에 대한 **지연 시간이 짧은 액세스를 제공**한다.
	* **VPC EndPoint를 통해 S3에 비공개적으로 액세스 가능**
	* IAM 정책, S3 버킷 정책 및 객체별 액세스 제어 목록을 사용하여 **데이터에 액세스할 수 있는 사용자를 세밀하게 제어**

<br/>S3에 버킷을 생성할 때 해당 버킷은 특정 AWS 리전에 연결된다.<br/>

**버킷에 데이터를 저장할 때마다** 해당 데이터는 선택한 리전의 **여러 AWS 시설에 중복 저장**된다.<br/>

S3 서비스는 2개의 AWS 시설에서 **동시에 데이터가 손실되는 경우에도 데이터를 안정적으로 저장하도록 설계**되어 있음.<br/>

Management Console, AWS CLI, AWS SDK를 사용하여 S3에 액세스 가능

<br/>

### AWS 글로벌 인프라

<br/>

* **리전**
	* 2개 이상의 가용 영역을 호스팅하는 지리적 영역
	* AWS 서비스에 대한 구성 수준
	* 여러 리전으로 리소스를 배포하여 비즈니스 요구 사항을 충족할 수 있다.
	* 다른 것과 완전히 분리된 개체
* **가용 영역**
	* 특정 리전 내에 존재하는 데이터 센터 모음
	* 각 가용 영역은 물리적으로 고립되어 있지만 빠르고 지연 시간이 짧은 네트워크로 서로 연결되어 있다.
	* 가용 영역을 격리함으로써 다른 영역의 장애로부터 보호되고 고가용성을 보장한다.
	* 리전 내 데이터 중복성을 통해 하나의 영역이 중단되더라도 다른 영역에서 요청을 처리할 수 있다.
* **엣지 로케이션**
	* 엣지 로케이션은 Amazon CloudFront라고 하는 CDN(콘텐츠 전송 네트워크)을 호스트한다.
	* CloudFront는 고객에게 콘텐츠를 전송하는 데 사용된다.
	* 콘텐츠에 대한 요청이 가장 가까운 엣지 로케이션으로 자동 라우팅 되므로 콘텐츠가 더욱 빨리 최종 사용자에게 전송된다.
	* 전역 네트워크를 사용하면 더욱 빠른 전송이 가능하다.

<br/>

### Amazon Virtual Private Cloud (VPC)

<br/>

네트워크 구성을 완벽하게 제어할 수 있다.<br/>

고객은 IP 주소 공간, 서브넷 및 라우팅 테이블과 같은 **일반 네트워킹 구성 항목을 정의**할 수 있다.<br/>

VPC를 네트워크의 보안 제어 계층에 배포할 수 있다. (서브넷 격리, 액세스 제어 목록 정의, 라우팅 규칙 사용자 지정이 포함됨)<br/>

**수신 트래픽과 발신 트래픽의 허용 및 거부를 완전히 제어 가능**<br/>

VPC는 AWS 기초 서비스이며 다양한 AWS 서비스와 통합된다. Ex) EC2, RDS<br/>

데이터베이스는 온프레미스 네트워크와 같이 네트워크 구조로 보호된다.<br/>

<br/>

* Amazon Virtual Private Cloud의 기능
	* 리전 및 가용 영역의 AWS 글로벌 인프라에 구축되어 AWS 클라우드에서 제공되는 고가용성을 쉽게 활용할 수 있다.
	* VPC는 리전 내에 존재하고, 여러 가용 영역에 걸쳐 존재할 수 있다.
	* VPC는 IP 주소 공간을 정의한 다음 서브넷으로 나눈다.
	* 서브넷은 가용 영역 내에 배포되어 VPC는 여러 가용 영역으로 확장된다.
	* 기본적으로 VPC 내 모든 서브넷은 서로 통신할 수 있다.

<br/>

**서브넷은 일반적으로 퍼블릭 또는 프라이빗으로 분류된다.**<br/>
**퍼블릭은 인터넷에 직접 액세스할 수 있고, 프라이빗은 인터넷에 직접 액세스할 수 없다.**

<br/>

### AWS 보안 그룹

<br/>

AWS 클라우드의 **보안 기능**은 AWS에서 **우선순위가 가장 높은 분야**이다.<br/>

AWS에서 **보안 그룹은 가상 서버에 대해 내장된 방화벽과 같은 역할**을 한다.<br/>
보안 그룹은 어떤 트래픽을 허용할지 거부할지 제어할 수 있다.<br/>

**가상 방화벽 제공**<br/>
**규칙을 통해 인스턴스에 대한 액세스 제어**<br/>